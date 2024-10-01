import { useCallback, useState } from "react";
import { Dialog } from "../dialog";
import { Button } from "../button";
import { Title } from "../title";
import { Input } from "../input";
import { Container } from "./styles";
import { useFetchAPI } from '../../hooks/useFetchAPI';
import { CreateCategoryData } from "../../validators/types";

export function CreateCategoryDialog() {
    const { createCategory } = useFetchAPI();
    const [open, setOpen] = useState(false);

    const handleClose = useCallback(() => {
        setOpen(false);
    }, []);

    const onSubmit = useCallback(async (data: CreateCategoryData) => {
        await createCategory(data);
        handleClose();
    }, [handleClose, createCategory]);

    return (
        <Dialog
            open={open}
            onOpenChange={setOpen}
            trigger={<Button>Nova Categoria</Button>}
        >
            <Container>
                <Title title="Nova Categoria" subtitle="Crie uma nova categoria para suas transações" />
                <form onSubmit={onSubmit}>
                    <div>
                        <Input label="Nome" placeholder="Nome da categoria" />
                        <Input label="Cor" type="color" />
                    </div>
                    <footer>
                        <Button onClick={handleClose} variant="outline" type="button">Cancelar</Button>
                        <Button type="submit">Cadastrar</Button>
                    </footer>
                </form>
            </Container>
        </Dialog>
    );
}
