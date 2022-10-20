function calcul()
{
    var n1 = parseInt(document.getElementById('n1').value);
    var n2 = parseInt(document.getElementById('n2').value);
    var operation = document.getElementById('operators').value;
    if (operation === '+')
    {
        document.getElementById('resultat').value = n1+n2 ;
    }
    if (operation === '-')
    {
        document.getElementById('resultat').value = n1-n2 ;
    }
    if (operation === '*')
    {
        document.getElementById('resultat').value = n1*n2 ;
    }
    if (operation === '/')
    {
        if(n2==0)
        document.querySelector("#resultatno").innerHTML = "It cannot be divided by zero";


        else
        document.getElementById('resultat').value = n1/n2 ;
    }
}
function clearBox(elementID)
{
    document.getElementById('resultatno').innerHTML = "";
    const firstNameInput1 = document.getElementById('resultat');
    const firstNameInput2 = document.getElementById('n1');
    const firstNameInput3 = document.getElementById('n2');

    firstNameInput1.value = '';
    firstNameInput2.value = '';
    firstNameInput3.value = '';
}
