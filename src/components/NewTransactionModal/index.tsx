import { useState } from "react";
import Modal from "react-modal";
import closeImg from "../../assets/close.svg"
import incomeImg from "../../assets/income.svg"
import outcomeImg from "../../assets/outcome.svg"
import { Container, TransactionTypeContainer, RadioBox } from "./styles";


interface NewTransactionModalProps{
    isOpen: boolean;
    onRequestClose:() => void;
}

export function NewTransactionModal({isOpen, onRequestClose}: NewTransactionModalProps){
    const [type, setType] = useState('deposit')

    return(
        <Modal 
            isOpen={isOpen}
            onRequestClose ={onRequestClose}
            overlayClassName="react-modal-overlay"
            className="react-modal-content"
            >
               <button 
                    type="button" 
                    onClick={onRequestClose} 
                    className="react-modal-close" >
                  <img src={closeImg} alt="fechar modal" />
               </button>
                <Container>
                      <h2>cadastrar</h2>

                      <input 
                         type="text"
                            placeholder="Título"
                      />
                      <input 
                         type="number"
                            placeholder="Valor"
                      />

                        <TransactionTypeContainer>
                                <RadioBox type="button"
                                onClick={() => {setType('deposit');}}
                                className={type === 'deposit' ? 'active' : ''}
                                >
                                    <img src={incomeImg} alt="Entrada" />
                                    <span>Entrada</span>
                                </RadioBox>
                                <RadioBox type="button"
                                onClick={() => {setType('withdraw');}}

                                >
                                    <img src={outcomeImg} alt="Saída" />
                                    <span>Saída</span>
                                </RadioBox>
                        </TransactionTypeContainer>

                      <input 
                         type="text"
                            placeholder="Categoria"
                      />
                      <button type="submit">
                          cadastrar
                      </button>
                </Container>
          </Modal>
    );
}