import { Link } from 'react-router-dom'
import React from 'react';
import { useState } from "react"
import { Button } from 'reactstrap';
import toastr from 'toastr';
import styled from "styled-components"

import { useTranslation } from 'react-i18next'
import API from '@/src/services/API'


const StyledInput = styled.input`
    margin: 1rem;
`
const StyledDiv = styled.div`
    background:white;
    padding: 1rem;
    border-radius: 5px;
`

function ApiREST() {

    const [apiResponse, setApiResponse] = useState()

    const [cpf1, setCpf1] = useState();
    const [id, setId] = useState();
    const [name, setName] = useState();
    const [cpf, setCpf] = useState();

    const { t } = useTranslation()

    return (
        <div className="api">
            <header className="api-header" >
                <div>
                    <span>
                        <h3>
                            <Link to={"/"}>{t('inicio')}</Link>
                        </h3>
                    </span>
                    <span>
                        <h3>
                            <Link to={"/methods"}>{t('metodos')}</Link>
                        </h3>
                    </span>
                </div>
                <div>
                    <h2>API REST</h2>
                </div>
            </header>
            <div>
                <Button color="danger" onClick={() => {
                    API.GetAll()
                        .then(resp => setApiResponse(resp.data))
                        .catch(e => toastr.error('Ocorreu um erro', 'Não foi possível recuperar registros', { "positionClass": "toast-top-center" }))
                }}>
                    Getall
                </Button>
            </div>
            <div>
                CPF:
                <span>
                    <StyledInput name="cpf1" type="number" maxlength="11"
                        onChange={(e) => { setCpf1(e.target.value) }} />
                </span>
                <span>
                    <Button color="danger" onClick={() => {
                        API.GetByCPF({ CPF: cpf1 })
                            .then(resp => setApiResponse(resp.data))
                            .catch(e => toastr.error('CPF inválido', 'Não foi possível recuperar informação', { "positionClass": "toast-top-center" }))
                    }}>
                        Get
                </Button>
                </span>
            </div>

            <span>
                Id:
                <StyledInput name="id"
                    onChange={(e) => { setId(e.target.value) }} />

                Name:
                <StyledInput name="name"
                    onChange={(e) => { setName(e.target.value) }} />

                CPF:
                <StyledInput name="cpf" type="number" maxlength="11"
                    onChange={(e) => { setCpf(e.target.value) }} />

                <Button color="danger" onClick={() => {
                    API.Save({ id, name, cpf })
                        .then(resp => setApiResponse(resp.data))
                        .catch(e => toastr.error('Não foi possível salvar', 'id repetido ou cpf inválido'))
                }}>
                    Save
                </Button>
            </span>
            <StyledDiv>{JSON.stringify(apiResponse)}</StyledDiv>
        </div >
    );
}

export default ApiREST