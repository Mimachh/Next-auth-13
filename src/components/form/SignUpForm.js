"use client";

import { useState } from "react";
import Link from 'next/link';
import { useForm, Controller } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { object, ref, string } from "yup";
import validator from "validator";

import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';


const schema = object({
    name: string()
        .required("Merci d'entrer votre nom !")
        .min(3, "Votre nom doit être compris entre 3 et 16 caractères !")
        .max(16, "Votre nom doit être compris entre 3 et 16 caractères !")
        .trim(),
    email: string()
        .required("Merci d'entrer votre mail !")
        .email("Email non valide !")
        .trim(),
    password: string()
        .required("Merci d'entrer un mot de passe !")
        .min(9, "Le mot de passe doit être compris entre 9 et 26 caractères !")
        .max(26, "Le mot de passe doit être compris entre 9 et 26 caractères !")
        .trim(),
    confirmPassword: string()
        .required("Merci d'entrer un mot de passe")
        .oneOf([ref("password"), null], "Les mots de passe ne correspondent pas !")
        .trim(),
}).required();



const SignUpForm = () => {
    const [error, setError ] = useState({});

    const {
        control,
        handleSubmit,
        formState: { errors },
    } = useForm({
        resolver: yupResolver(schema),
    });

    const onSubmit = (data) => {
        const { name, email, password, confirmPassword } = data;
    };

  return (
    <form className="sign_form" onSubmit={handleSubmit(onSubmit)}>
        <h2>Inscription</h2>
        <Controller 
            name="name" 
            control={control} 
            defaultValue="" 
            render={({ field }) =>(
            <TextField {...field} 
            id="name" 
            type="text" 
            variant="standard" 
            label="Votre nom" 
            placeholder="Merci d'entrer votre nom"
            helperText={errors?.name ? errors?.name?.message : "" }
            error={errors?.name ? Boolean(true) : Boolean(false)}
            autoComplete="off" 
            /> )}
        />

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

        <Controller 
            name="confirmPassword" 
            control={control} 
            defaultValue="" 
            render={({ field }) =>(
            <TextField {...field} 
            id="confirmPassword" 
            type="password" 
            variant="standard" 
            label="Confirmez votre mot de passe" 
            placeholder="Confirmez votre mot de passe"
            helperText={errors?.confirmPassword ? errors?.confirmPassword?.message : "" }
            error={errors?.confirmPassword ? Boolean(true) : Boolean(false)}
            /> )}
        />

        <Button type="submit" variant="outlined" className="submit_sign_in">
            Valider
        </Button>
        <div className="separate_button">
            <Button type="button" variant="outlined" color="warning">
                <Link href="/signin">
                    Se connecter
                </Link>
            </Button>

            <Button type="button" variant="outlined" color="secondary">
                <Link href="/">Retour à la Page principale</Link>
            </Button>
        </div>
    </form>
  )
}

export default SignUpForm