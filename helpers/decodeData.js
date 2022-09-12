export const decodeDataForm = (dataForm) => {
    const dataDecoded = {
        gender: dataForm.gender == 'M',
        height: Number(dataForm.height),
        weight: Number(dataForm.weight),
        waist: Number(dataForm.waist),
        neck: Number(dataForm.neck),
    }
    if (dataForm.hip) {
        dataDecoded['hip'] = Number(dataForm.hip)
    }
    return dataDecoded;
}