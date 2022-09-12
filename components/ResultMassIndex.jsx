import { LIMITSPORCENTAGE } from "../helpers/limitsPorcentage";
import styles from '../styles/MassCalculator.module.css';

export const ResultMassIndexCalculator = ({ porcentage, gender }) => {

    const getMarginToScale = (p) => {
        const offset = gender == 'F' ? 25 : 2
        const margin = p * 100 / 33 - offset;
        if (margin > 100) {
            return '99%'
        } else if (margin < 0) {
            return '-2%'
        } else {
            return margin.toFixed(0) + "%"
        }
    }

    const porcentagesInfo = gender == 'M' ? LIMITSPORCENTAGE['male'] : LIMITSPORCENTAGE['female'];

    return (
        <div className="flex flex-col justify-center align-middle h-full">
            <div className=" font-medium text-[28px]">
                Tu resultado es: {porcentage}%
            </div>
            <div className="flex flex-col">
                <div style={{ marginLeft: getMarginToScale(porcentage) }}>
                    <div className="w-auto flex flex-col">
                        <div className=" ml-[-10px]">
                            <span className=" text-[22px]">
                                {porcentage}%
                            </span>
                        </div>
                        <div className={styles.triangule}></div>
                    </div>
                </div>
                <div>
                    <div className={styles.gradient}>
                    </div>
                </div>
                <div>
                    <div className="flex flex-row w-full pr-12 mt-4">
                        <div className=" flex flex-col w-full items-center">
                            <div className=" h-4 w-4 bg-[#009fe3] rounded-md border-white border"></div>
                            <p>{porcentagesInfo.esencial.down}% - {porcentagesInfo.esencial.up}%</p>
                            <p>Esencial</p>
                        </div>
                        <div className=" flex flex-col w-full items-center">
                            <div className=" h-4 w-4 bg-[#009c3d] rounded-md border-white border"></div>
                            <p>{porcentagesInfo.deportista.down}% - {porcentagesInfo.deportista.up}%</p>
                            <p>Deportista</p>
                        </div>
                        <div className=" flex flex-col w-full items-center">
                            <div className=" h-4 w-4 bg-[#98c21d] rounded-md border-white border"></div>
                            <p>{porcentagesInfo.fitness.down}% - {porcentagesInfo.fitness.up}%</p>
                            <p>Fitness</p>
                        </div>
                        <div className=" flex flex-col w-full items-center">
                            <div className=" h-4 w-4 bg-[#feca00] rounded-md border-white border"></div>
                            <p>{porcentagesInfo.aceptable.down}% - {porcentagesInfo.aceptable.up}%</p>
                            <p>Aceptable</p>
                        </div>
                        <div className=" flex flex-col w-full items-center">
                            <div className=" h-4 w-4 bg-[#d76328] rounded-md border-white border"></div>
                            <p>{porcentagesInfo.obeso.down}% - {porcentagesInfo.obeso.up}%</p>
                            <p>Obeso</p>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    )
}