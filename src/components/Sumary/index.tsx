import React, {useContext} from 'react';
import outcomeImg from "../../assets/outcome.svg";
import totalcomeImg from "../../assets/total.svg";
import incomeImg from "../../assets/income.svg";
import { Container } from "./styles";
import {TransactionsContext} from "../../TransactionsContext"

export function Sumary(){
    const {transactions} = useContext(TransactionsContext);

    const summary = transactions.reduce((acc, transaction) =>{
        if (transaction.type == 'deposit'){
            acc.deposits += transaction.amount;
            acc.total += transaction.amount;
        } else {
            acc.withdraws += transaction.amount;
            acc.total -= transaction.amount;
        }

        return acc;
    },{
        deposits: 0,
        withdraws: 0,
        total: 0,
    }
    )

    return(
        <Container>
            <div>
                <header>
                    <p>Entradas</p>
                    <img src={incomeImg} alt="entradas" />
                </header>
                <strong>R$ {summary.deposits}</strong>
            </div>
            <div>
                <header>
                    <p>Saídas</p>
                    <img src={outcomeImg} alt="Saídas" />
                </header>
                <strong>R$ -{summary.withdraws}</strong>
            </div>
            <div className="dads">
                <header>
                    <p>Total</p>
                    <img src={totalcomeImg} alt="entradas" />
                </header>
                <strong>R$ {summary.total}</strong>
            </div>
        </Container>
    )
}