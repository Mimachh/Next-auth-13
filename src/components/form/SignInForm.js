"use client";

import { useState } from "react";
import Link from 'next/link';
import { useForm, Controller } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { object, string } from "yup";

import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';

const schema = object({
    email: string()
        .required("Merci d'entrer votre mail")
        .email("Email non valide")
        .trim(),
    password: string()
        .required("Merci d'entrer un mot de passe")
        .min(9, "Le mot de passe doit être compris entre 9 et 26 caractères")
        .max(26, "Le mot de passe doit être compris entre 9 et 26 caractères")
        .trim(),
}).required();


const SignInForm = () => {
    const [error, setError ] = useState({});

    const { control, handleSubmit, formState: { errors } } = useForm({
        resolver: yupResolver(schema)
    });

    const onSubmit = (data) => {
        const { email, password } = data;

        try {
           // TODO
           //Submit to nextAuth 
        }
        catch (e) {
            setError({ message: e.message });
        }
    };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="sign_form">
        <h2>Connexion</h2>

        <Controller 
            name="email" 
            control={control} 
            defaultValue="" 
            render={({ field }) =>(
            <TextField {...field} 
            id="email" 
            type="email" 
            variant="standard" 
            label="Email" 
            placeholder="Votre email"
            helperText={errors?.email ? errors?.email?.message : "" }
            error={errors?.email ? Boolean(true) : Boolean(false)}
            autoComplete="off" 
            /> )}
        />

        <Controller 
            name="password" 
            control={control} 
            defaultValue="" 
            render={({ field }) =>(
            <TextField {...field} 
            id="password" 
            type="password" 
            variant="standard" 
            label="Mot de passe" 
            placeholder="Votre mot de passe"
            helperText={errors?.password ? errors?.password?.message : "" }
            error={errors?.password ? Boolean(true) : Boolean(false)}
            /> )}
        />

        <Button type="submit" variant="outlined" className="submit_sign_in">
            Valider
        </Button>
        <div className="separate_button">
            <Button type="button" variant="outlined" color="warning">
                <Link href="/signup">
                    S'inscrire
                </Link>
            </Button>

            <Button type="button" variant="outlined" color="secondary">
                <Link href="/">Retour à la Page principale</Link>
            </Button>
        </div>
    </form>
  )
};

export default SignInForm;