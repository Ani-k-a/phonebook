import { Button } from "@mui/material";
import styled from "styled-components";


export const Form = styled.form`
margin-left: auto;
magin-right: auto;
    padding: 35px 0 ;
    text-align: center;`

export const Label = styled.label`
 margin-right: 15px;
    font - style: italic;
    `

export const Input = styled.input`
margin-left: 10px;
    padding: 5px 5px;
    background-color: transparent;
    border-radius: 4px;
     outline: transparent;
    
    &:focus {
        border-color: black;
    }`

export const ButtonForm = styled(Button)`
margin-top: 15px
`

