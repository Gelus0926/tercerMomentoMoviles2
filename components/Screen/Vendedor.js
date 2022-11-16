import { View, Text, TextInput, TouchableOpacity, StyleSheet } from 'react-native'
import React, { useState } from 'react'
import { useForm, Controller } from 'react-hook-form'
import { Ionicons } from "@expo/vector-icons"
import { SectionList } from 'react-native-web'

const estilos = StyleSheet.create({
        textSaldo: {
            textShadow: `2px 2px 2xp black`,
            fontSize: 16,
            fontWeight: '600'
        },
        inputs: {
            marginTop:70,
            color: `black`,
            width: '25',
            textAlign: 'center',
            marginBottom: 25,
            fontSize: 16
        },
        Touchable: {
            backgroundColor: '#C03AEE',
            width: '270px',
            marginTop: '20px',
            padding: '5px',
            margin: 'auto',
            textAlign: 'center',
            marginBottom: '10px'

        },
        comprobante: {
            color: 'black',
            fontSize: 17,
            textAlign: 'center'
        },
        view: {
            display: 'flex',
            justifyContent: 'flex-end'
        }
    }
)

export default function Vendedor({route}) {
    const {control, handleSubmit, reset, formState: {errors}} = useForm({
        defaultValues: {
            idvendedor  : '',
            nombre: '',
            correo: '',
            totalcomision: ''
        }
    })

    const [nombre, setNombre] = useState('')
    const [correo, setCorreo] = useState('')
    const [totalcomision, setTotalComision] = useState('')

    const onSubmit = data => {
        console.log(data)
        setNombre(data.nombre)
        setCorreo(data.correo)
        setTotalComision(data.totalcomision)
    }

    return(
        <View>
            <View>
                <View style = {estilos.containerSaldo}/>
                <View style = {estilos.containerInputs}>
                    <Controller
                        control = {control}
                        rules = {{
                            required: true,
                            pattern: /^[0-9]+$/,
                            minLength: 10
                        }}
                        render={({field: {onChange, onBlur, value}}) => (
                            <TextInput
                                style = {estilos.inputs}
                                onBlur = {onBlur}
                                onChangeText = {onChange}
                                value = {value}
                                placeholder = {'Digitar Id'}
                            />
                        )}
                        name = "idvendedor"
                    />
                    {errors.idvendedor?.type == 'required' && <Text style = {{fontSize: 12, color: 'red', marginBottom: 5,marginLeft: '35%'}}>Este Campo es obligatorio</Text>}
                    {errors.idvendedor?.type == 'minLength' && <Text style = {{fontSize: 12, color: 'red', marginBottom: 5,marginLeft: '35%'}}>Minimo 10 numeros</Text>}
                    {errors.idvendedor?.type == 'pattern' && <Text style = {{fontSize: 12, color: 'red', marginBottom: 5,marginLeft: '35%'}}>Campo solo numerico</Text>}

                    <Controller
                        control = {control}
                        rules = {{
                            required: true,
                            pattern: /^[ a-zA-ZñÑáéíóúÁÉÍÓÚ]+$/,
                            minLength: 10,
                            maxLength: 10,
                        }}
                        render = {({field: {onChange, onBlur, value}}) => (
                            <TextInput
                                style = {estilos.inputs}
                                onBlur = {onBlur}
                                onChangeText = {onChange}
                                value = {value}
                                placeholder = {'Digitae Nombre'}
                            />
                        )}
                        name = "nombre"
                    />
                    {errors.nombre?.type == 'required' && <Text style = {{fontSize: 12, color: 'red', marginBottom: 15,marginLeft: '35%'}}>Este Campo es obligatorio</Text>}
                    {errors.nombre?.type == 'pattern' && <Text style = {{fontSize: 12, color: 'red', marginBottom: 15,marginLeft: '35%'}}>Campo solo permite texto</Text>}
                    {errors.nombre?.type == 'minLength' && <Text style = {{fontSize: 12, color: 'red', marginBottom: 15,marginLeft: '35%'}}>Minimo 10 caracteres</Text>}
                    {errors.nombre?.type == 'maxLength' && <Text style = {{fontSize: 12, color: 'red', marginBottom: 15,marginLeft: '35%'}}>Maximo 10 caracteres</Text>}

                    <Controller
                        control = {control}
                        rules = {{ 
                            required: true,
                            pattern: /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/
                        }}
                        render = {({field: {onChange, onBlur, value}}) => (
                            <TextInput
                                style = {estilos.inputs}
                                onBlur = {onBlur}
                                onChangeText = {onChange}
                                value = {value}
                                placeholder = {'Digite correo'}
                            />
                        )}
                        name = "correo"
                    />
                    {errors.correo?.type == 'required' && <Text style = {{fontSize: 12, color: 'red', marginBottom: 5,marginLeft: '35%'}}>Este Campo es obligatorio</Text>}
                    {errors.correo?.type == 'pattern' && <Text style = {{fontSize: 12, color: 'red', marginBottom: 5,marginLeft: '45%'}}>Solo letras</Text>}

                    <Controller
                        control = {control}
                        rules = {{
                            required: true,
                            pattern: /^[0-9]+$/,
                        }}
                        render = {({field: {onChange, onBlur, value}}) => (
                            <TextInput
                                style = {estilos.inputs}
                                onBlur = {onBlur}
                                onChangeText = {onChange}
                                value = {value}
                                placeholder = {'Digitar saldo a enviar'}
                            />
                        )}
                        name = "totalcomision"
                    />
                    {errors.totalcomision?.type == 'required' && <Text style = {{fontSize: 12, color: 'red', marginBottom: 5, marginLeft: '35%'}}>Este Campo es obligatorio</Text>}
                    {errors.totalcomision?.type == 'pattern' && <Text style = {{fontSize: 12, color: 'red', marginBottom: 5,marginLeft: '30%'}}>Este campo solo permite numeros</Text>}

                    <TouchableOpacity style = {estilos.Touchable} onPress = {handleSubmit(onSubmit)}>
                        <Text style = {{
                            color:'#FFF',
                            fontWeight: 'bold',
                            borderRadius: 20,
                            padding: 10
                        }}> Enviar dinero </Text>
                    </TouchableOpacity>

                    <View style = {{
                            marginTop: 20, color: 'white',
                            height: "140px", width: '100%', textAlign: 'center', fontWeight: 'bold',
                        }}>
                        <View style = {estilos.view}>
                            <Text style = {estilos.comprobante}>Datos de la transacion</Text>
                            <Text style = {estilos.comprobante}>Nombre : {nombre}</Text>
                            <Text style = {estilos.comprobante}>Correo : {correo}</Text>
                            <Text style = {estilos.comprobante}>Totalcomision : {totalcomision}</Text>
                        </View>
                    </View>
                </View>
            </View>
        </View>
    )
}