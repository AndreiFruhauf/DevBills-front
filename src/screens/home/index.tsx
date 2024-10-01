import { ButtonIcon } from "../../components/buttonIcon";
import { Card } from "../../components/card";
import { CategoriesPieChart } from "../../components/categories-pie-chart";
import { CreateCategoryDialog } from "../../components/create-category-dialog";
import { CreateTransactionDialog } from "../../components/create-transaction-dialog";
import { FinancialEvolutionBarChart } from "../../components/financial-evolution-bar-chart";
import { Input } from "../../components/input";
import { Logo } from "../../components/logo";
import { Title } from "../../components/title";
import { Transaction } from "../../components/transaction";
import { Header, Main, Section, Filters, InputGroup, Balance, ChartContainer, ChartContent, ChartAction, Aside, SearchTransaction, TransactionGroup } from "./styles";
import {InputMask} from '@react-input/mask'

export function Home() {
    return (
        <>
        <Header>
            <Logo />
            <div>
                <CreateTransactionDialog />
                <CreateCategoryDialog />
            </div>
        </Header>
        <Main>
            <Section>
                <Filters>
                    <Title title="Saldo" subtitle="Receitas e despesas no período"/>
                    <InputGroup>
                        <InputMask 
                        component={Input}
                        mask='dd/mm/aaaa'
                        replacement={{d: /\d/, m: /\d/, a: /\d/}}
                        variant="dark"
                        label="Início"
                        placeholder="dd/mm/aaaa"
                        />
                        <InputMask 
                        component={Input}
                        mask='dd/mm/aaaa'
                        replacement={{d: /\d/, m: /\d/, a: /\d/}}
                        variant="dark"
                        placeholder="dd/mm/aaaa"
                        label="Fim"
                        />
                        <ButtonIcon />
                    </InputGroup>
                </Filters>
                <Balance>
                    <Card title="Saldo" amount={1000000}/>
                    <Card title="Receitas" amount={1000000} variant="incomes"/>
                    <Card title="Gastos" amount={1000000} variant="expenses"/>
                </Balance>
                <ChartContainer>
                    <header>
                        <Title title="Gastos" subtitle="Despesas por categoria no período"/>
                    </header>
                    <ChartContent>
                        <CategoriesPieChart />
                    </ChartContent>
                </ChartContainer>
                <ChartContainer>
                    <header>
                        <Title title="Evolução Financeira" subtitle="Saldo, Receitas e gastos no ano"/>
                        <ChartAction><InputMask 
                        component={Input}
                        mask='aaaa'
                        replacement={{a: /\d/}}
                        variant="black"
                        placeholder="aaaa"
                        />
                        <ButtonIcon />
                        </ChartAction>
                    </header>
                    <ChartContent>
                        <FinancialEvolutionBarChart />
                    </ChartContent>
                </ChartContainer>
            </Section>
            <Aside>
            <header>
                <Title title="Transações" subtitle="Receitas e Gastos no período"/>
                <SearchTransaction>
                    <Input 
                        variant="black"
                        placeholder="Procurar transações"
                    />
                    <ButtonIcon />
                </SearchTransaction>
            </header>
            <TransactionGroup>
                    <Transaction title="mercado" id={1} amount={20000} date="26/08/2024" category={{title: 'Alimentação', color: '#aaffaa'}}/>
                    <Transaction title="mercado" id={1} amount={20000} date="26/08/2024" category={{title: 'Alimentação', color: '#aaffaa'}}/>
                    <Transaction title="mercado" id={1} amount={20000} date="26/08/2024" category={{title: 'Alimentação', color: '#aaffaa'}}/>
                    <Transaction title="mercado" id={1} amount={20000} date="26/08/2024" category={{title: 'Alimentação', color: '#aaffaa'}}/>
                </TransactionGroup>
            </Aside>
        </Main>
        </>
    )
}