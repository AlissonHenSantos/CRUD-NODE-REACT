import React, { Component } from "react";
import Axios from "axios";
import { Link } from "react-router-dom";

const baseUrl = "http://localhost:3001/users"

const stateInitial = {
    user: {
        name: '', email: '', password: '', adm: '', confirmPassword: ''
    },
    list: []
}


export default class crud extends Component {
    state = { ...stateInitial }


    componentWillMount() {
        Axios(baseUrl).then(res => {
            this.setState({ list: res.data })
        })
    }

    clear() {
        this.setState({ user: stateInitial.user })
    }

    save() {
        const user = this.state.user
        const method = user.id ? 'put' : 'post'
        const url = user.id ? `${baseUrl}/${user.id}` : baseUrl
        Axios[method](url, user)
            .then(res => {
                const list = this.getUpdatedList(res.data)
                this.setState({ user: stateInitial.user, list })
                
            })
         
    }


    getUpdatedList(user) {
        const list = this.state.list.filter(u => u.id !== user.id)
        list.unshift(user)
        return list
    }

    updateField(event) {
        const user = { ...this.state.user }
        user[event.target.name] = event.target.value
        this.setState({ user })
    }

    form() {
        return (
            <div className="form mb-5">
                <div className="col-12 cold-md-6">
                    <div className="form-group">
                        <label className="">Nome:</label>
                        <input value={this.state.user.name} onChange={e => this.updateField(e)} type="text" className="form-control" name="name" placeholder="Digite seu nome" />
                        <label>Email:</label>
                        <input value={this.state.user.email} onChange={e => this.updateField(e)} type="text" className="form-control" name="email" placeholder="Digite seu Email" />
                        <label>Senha:</label>
                        <input value={this.state.user.password} onChange={e => this.updateField(e)} type="text" className="form-control" name="password" placeholder="Digite sua Senha" />
                        <label>Confirmar Senha</label>
                        <input value={this.state.user.confirmPassword} onChange={e => this.updateField(e)} type="text" className="form-control" name="confirmPassword" placeholder="Confirme sua Senha" />
                        

                        <p></p>

                        <div className="d-flex justify-content-center">
                            <button onClick={e => this.save(e)} className=" m-1 btn btn-success">Salvar</button>
                            <button onClick={e => this.clear(e)} className=" m-1 btn btn-secondary">Cancelar</button>
                        </div>
                    </div>


                </div>
            </div>
        )
    }

    renderTable() {
        return (<table className="table">
            <thead>
                <tr>
                    <th>Id</th>
                    <th>Nome</th>
                    <th>Email</th>
                    <th>Senha</th>
                    <th>Adm</th>
                    <th>Alterar</th>
                    <th>Excluir</th>
                </tr>
            </thead>

            <tbody>
                {this.renderRows()}
            </tbody>
        </table>)
    }

    load(user) {
        this.setState({ user })
    }

    delete(user) {
        Axios.delete(`${baseUrl}/${user.id}`).then(res => {
            const list = this.state.list.filter(u => u !== user)
            this.setState({ list })
        })
    }


    renderRows() {
        return this.state.list.map(user => {
            return (
                <tr key={user.id}>
                    <td>
                        {user.id}
                    </td>
                    <td>
                        {user.name}
                    </td>
                    <td>
                        {user.email}
                    </td>
                    <td>
                        {user.password}
                    </td>
                    <td>
                        {user.adm ? 'Administrador' : 'Não administrador'}
                    </td>
                    <td className="">
                        <button onClick={() => this.load(user)} className="btn">
                            <i class="fa fa-folder text-primary"></i>
                        </button>



                    </td>
                    <td>
                        <button onClick={() => this.delete(user)} className="btn">
                            <i class="fa fa-trash text-danger"></i>
                        </button>

                    </td>
                </tr>
            )
        })
    }

    render() {


        return (
            <main>
                {this.form()}
                {this.renderTable()}
            </main>
        )
    }
}