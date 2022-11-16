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

export default function Ventas({route}) {
    const {control, handleSubmit, reset, formState: {errors}} = useForm({
        defaultValues: {
            Idvendedor  : '',
            Zona: '',
            fecha: '',
            valorVenta: ''
        }
    })

    const [Idvendedor, setIdvendedor] = useState('')
    const [Zona, setZona] = useState('')
    const [fecha, setFecha] = useState('')
    const [valorVenta, setValorVenta] = useState('')

    const onSubmit = data => {
        console.log(data)
        setZona(data.zona)
        setFecha(data.fecha)
        setValorVenta(data.valorVenta)
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
                    {errors.idvendedor?.type == 'required' && <Text style = {{fontSize: 12, color: 'red',marginLeft: '35%'}}>Este Campo es obligatorio</Text>}
                    {errors.idvendedor?.type == 'minLength' && <Text style = {{fontSize: 12, color: 'red',marginLeft: '35%'}}>Minimo 10 numeros</Text>}
                    {errors.idvendedor?.type == 'pattern' && <Text style = {{fontSize: 12, color: 'red',marginLeft: '35%'}}>Campo solo numerico</Text>}

                    <Controller
                        control = {control}
                        rules = {{
                            required: true,
                            pattern: /^[ a-zA-ZñÑáéíóúÁÉÍÓÚ]+$/,
                        }}
                        render = {({field: {onChange, onBlur, value}}) => (
                            <TextInput
                                style = {estilos.inputs}
                                onBlur = {onBlur}
                                onChangeText = {onChange}
                                value = {value}
                                placeholder = {'Digite la Zona'}
                            />
                        )}
                        name = "zona"
                    />
                    {errors.zona?.type == 'required' && <Text style = {{fontSize: 12, color: 'red',marginLeft: '35%'}}>Este Campo es obligatorio</Text>}
                    {errors.zona?.type == 'pattern' && <Text style = {{fontSize: 12, color: 'red',marginLeft: '35%'}}>Este campo solo permite letras</Text>}

                    <Controller
                        control={control}
                        rules={{
                        required: true,
                        pattern: /^(?:(?:(?:0?[1-9]|1\d|2[0-8])[/](?:0?[1-9]|1[0-2])|(?:29|30)[/](?:0?[13-9]|1[0-2])|31[/](?:0?[13578]|1[02]))[/](?:0{2,3}[1-9]|0{1,2}[1-9]\d|0?[1-9]\d{2}|[1-9]\d{3})|29[/]0?2[/](?:\d{1,2}(?:0[48]|[2468][048]|[13579][26])|(?:0?[48]|[13579][26]|[2468][048])00))$/
                        }}
                        render={({ field: { onChange, onBlur, value } }) => (
                        <TextInput
                            style={estilos.inputs}
                            placeholder="dd/mm/aa"
                            type="date"
                            onChange={onChange}
                            onBlur={onBlur}
                            value={value}
                        />
                        )}
                        name="fecha" //Estado a validar
                    />
                    {errors.fecha?.type == "required" && <Text style={{ color: 'red',marginLeft: '30%'}}>Este Campo es obligatorio</Text>}
                    {errors.fecha?.type == "pattern" && <Text style={{ color: 'red',marginLeft: '35%'}}>El formato para la fecha es: aa/mm/dd</Text>}

                    <Controller
                        control={control}
                        rules={{
                        required: true,
                        pattern: /^[0-9]+$/,
                        min: 2000000
                        }}
                        render={({ field: { onChange, onBlur, value } }) => (
                        <TextInput
                            style={estilos.inputs}
                            placeholder="Digite el salario"
                            onChange={onChange}
                            onBlur={onBlur}
                            value={value}
                        />
                        )}
                        name="valorVenta" //Estado a validar
                    />
                    {errors.valorVenta?.type == "required" && <Text style={{ color: 'red',marginLeft: '30%'}}>Este Campo es obligatorio</Text>}
                    {errors.valorVenta?.type == "pattern" && <Text style={{ color: 'red',marginLeft: '35%'}}>Este campo solo es numerico</Text>}
                    {errors.valorVenta?.type == "min" && <Text style={{ color: 'red',marginLeft: '20 %'}}>El salario no puede ser menor a 2000000</Text>}


                    <TouchableOpacity style = {estilos.Touchable} onPress = {handleSubmit(onSubmit)}>
                        <Text style = {{
                            color: '#FFF',
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
                            <Text style = {estilos.comprobante}>Id : {Idvendedor}</Text>
                            <Text style = {estilos.comprobante}>Zona : {Zona}</Text>
                            <Text style = {estilos.comprobante}>fecha : {fecha}</Text>
                            <Text style = {estilos.comprobante}>valorVenta : {valorVenta}</Text>
                        </View>
                    </View>
                </View>
            </View>
        </View>
    )
}   