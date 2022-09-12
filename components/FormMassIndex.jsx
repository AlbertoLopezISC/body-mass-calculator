import { useState } from "react";
import { useForm } from "react-hook-form";
import { calculateIndexMass } from "../helpers/massIndexCalculator";
import { ResultMassIndexCalculator } from "./ResultMassIndex";
import { decodeDataForm } from "../helpers/decodeData";


export const FormMassIndex = () => {

    const [porcentage, setPorcentage] = useState(null);

    const {
        register,
        handleSubmit,
        reset,
        watch,
        formState: { errors, isDirty, isValid }
    } = useForm({ mode: "onChange" });

    const watchGender = watch('gender', null);


    const onSubmit = (dataForm) => {
        const data = decodeDataForm(dataForm);
        const bfi = calculateIndexMass(data.gender, data.weight, data.height, data.waist, data.hip, data.neck);
        const porcetagebfi = bfi.bodyFatPorcentag < 0 ? 0 : bfi.bodyFatPorcentag;
        setPorcentage(porcetagebfi.toFixed(1));
    }

    return (
        <div className="grid lg:grid-cols-2 grid-cols-1 gap-x-44">
            <div className="mt-12 mb-6">
                <h1 className="md:text-[48px] text-[24px] font-medium mb-6">Calculadora de grasa corporal</h1>
                <p className="mb-6">
                    El método de la Marina de Estados Unidos (US Navy Method) ofrece
                    una manera sencilla de calcular un proximado del porcentaje de tejido
                    adiposo en el cuerpo de una person.
                </p>
                <p className=" mb-6">
                    Los valores requeridos para la fórmula son los siguientes:
                </p>
                <div>
                    <form className="grid grid-cols-1 mb-6">
                        <label className="mb-2">Genero</label>
                        <div className=" flex flex-row items-center mb-6">
                            <input className=" rounded-3xl border-2 ml-4 py-2 text-[17px]" type="radio"
                                {...register("gender", {
                                    required: true
                                })}
                                value="M"
                                name="gender" id="male_gender" /> <label htmlFor="male_gender" className="ml-2">Hombre</label>
                            <input className=" rounded-3xl border-2 ml-4 py-2 text-[17px]" type="radio"
                                {...register("gender", {
                                    required: true
                                })}
                                value="F" name="gender" id="female_gender" /> <label htmlFor="female_gender" className="ml-2">Mujer</label>
                        </div>

                        <label htmlFor="height" className="mb-2">Altura (cm)</label>
                        <input className={` rounded-3xl border-2 pl-4 py-2 text-[17px] ${!errors?.height ? 'mb-6' : ''}`}
                            {...register("height", {
                                required: true,
                                max: 250,
                                min: 0
                            })}
                            type="number" name="height" id="height" />
                        {errors?.height?.type === "required" && <p>Campo requerido</p>}
                        {(errors?.height?.type === "max" || errors?.height?.type === "min") && (
                            <p>Altura invalida.</p>
                        )}
                        <label htmlFor="weight" className="mb-2">Peso (kg)</label>
                        <input className={` rounded-3xl border-2 pl-4 py-2 text-[17px] ${!errors?.weight ? 'mb-6' : ''}`}
                            {...register("weight", {
                                required: true,
                                max: 1000,
                                min: 0
                            })}
                            type="number" name="weight" id="weight" />
                        {errors?.weight?.type === "required" && <p>Campo requerido</p>}
                        {(errors?.weight?.type === "max" || errors?.weight?.type === "min") && (
                            <p>Peso invalido.</p>
                        )}
                        <label htmlFor="waist" className="mb-2">Cintura (cm)</label>
                        <input className={` rounded-3xl border-2 pl-4 py-2 text-[17px] ${!errors?.waist ? 'mb-6' : ''}`}
                            {...register("waist", {
                                required: true,
                                max: 1000,
                                min: 0
                            })}
                            type="number" name="waist" id="waist" />
                        {errors?.waist?.type === "required" && <p>Campo requerido</p>}
                        {(errors?.waist?.type === "max" || errors?.waist?.type === "min") && (
                            <p>Medida de cintura invalida.</p>
                        )}
                        <label htmlFor="neck" className="mb-2">Cuello (cm)</label>
                        <input className={` rounded-3xl border-2 pl-4 py-2 text-[17px] ${!errors?.neck ? 'mb-6' : ''}`}
                            {...register("neck", {
                                required: true,
                                max: 400,
                                min: 0
                            })}
                            type="number" name="neck" id="neck" />
                        {errors?.neck?.type === "required" && <p>Campo requerido</p>}
                        {(errors?.neck?.type === "max" || errors?.neck?.type === "min") && (
                            <p>Medida de cuello invalida.</p>
                        )}


                        {watchGender == 'F' && (
                            <div className="flex flex-col">
                                <label htmlFor="hip" className="mb-2">Cadera (cm)</label>
                                <input className={` rounded-3xl border-2 pl-4 py-2 text-[17px] ${!errors?.hip ? 'mb-6' : ''}`}
                                    {...register("hip", {
                                        required: true,
                                        max: 1000,
                                        min: 0
                                    })}
                                    type="number" name="hip" id="hip" />
                                {errors?.hip?.type === "required" && <p>Campo requerido</p>}
                                {(errors?.hip?.type === "max" || errors?.hip?.type === "min") && (
                                    <p>Medida de caderas invalida.</p>
                                )}
                            </div>
                        )}


                    </form>
                    <div>
                        <button className="inline-block rounded-3xl bg-[#7e3fe7] px-4 py-2 mr-4 disabled:opacity-50" onClick={handleSubmit(onSubmit)} type="submit" disabled={!isDirty || !isValid}>
                            Calcular
                        </button>
                        <button className="inline-block px-4 py-2" onClick={() => { reset(); setPorcentage(null) }}>
                            Limpiar
                        </button>
                    </div>
                </div>
            </div>
            <div>
                {porcentage != null && (
                    <ResultMassIndexCalculator porcentage={porcentage} gender={watchGender} />
                )}
            </div>
        </div>
    )

}