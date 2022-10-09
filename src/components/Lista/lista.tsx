import { Descricao, Foto, ItemLista, ListaStyled, ListaVazia, Nome, Valor } from "./lista.style";
import { Button } from '@mui/material'
import { Professor } from "../../@types/professor";

interface ListaProps {
    professores: Professor[],
}

const Lista = (props: ListaProps) => {
    return (
        <div>
            {props.professores.length > 0 ? (
                <ListaStyled>
                    {props.professores.map(professor => (
                        <ItemLista key={professor.id}>
                            <Foto src={professor.foto}></Foto>
                            <div>
                                <Nome>{professor.nome}</Nome>
                                <Valor>{professor.valorhora.toLocaleString('pt-BR', {minimumFractionDigits: 2, style: 'currency', currency: 'BRL'})} por hora</Valor>
                                <Descricao>{professor.descricao}</Descricao>
                                <Button sx={{ width: '70%'}}>Contrate {professor.nome}</Button>
                            </div>
                        </ItemLista>
                    ))}
                </ListaStyled>
            ) : (
                <ListaVazia>Nenhum item encontrado</ListaVazia>
            )}
        </div>
    )
}

export default Lista;