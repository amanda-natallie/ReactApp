export function IsNumber(n) {
        return !isNaN(parseFloat(n)) && isFinite(n);
}
export function formatDate(userDate) {
        var dateArr = userDate.split('-');
        if (dateArr[0].length == 1) {
                dateArr[0] = '0' + dateArr[0];
        } else if (dateArr[1].length == 1) {
                dateArr[1] = '0' + dateArr[1];
        }
        userDate = dateArr[2] + "/" + dateArr[1] + "/" + dateArr[0];
        return userDate;
}
export function formataCPF(cpf) {
        cpf = cpf.replace(/[^\d]/g, "");
        return cpf.replace(/(\d{3})(\d{3})(\d{3})(\d{2})/, "$1.$2.$3-$4");
}
export function formataCEP(cep) {
        cep = cep.replace(/[^\d]/g, "");
        return cep.replace(/(\d{5})(\d{3})/, "$1-$2");
}
export function formataTelefone(tel) {
        tel = tel.replace(/[^\d]/g, "");
        return tel.replace(/(\d{2})(\d{5})(\d{4})/, "($1) $2-$3");
}