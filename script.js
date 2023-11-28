let button = document.getElementById("butt"), decimalIpValue = document.getElementById("decimal_ip_value"),
             binaryIpValue=document.getElementById("binary_ip_value");


function generateIp() {
    let ipAddress='';
    for(let i = 0; i < 4; i++){
        ipAddress+=Math.floor(Math.random()*256);
        if(i!=3){
            ipAddress+='.';
        }
    }
    return ipAddress;
}
function convertIpToBinary(ip){
    let array = [];
    let strRes = '';
    array = ip.split('.');
    for(let i = 0; i < array.length; i++){
        array[i]=parseInt(array[i]).toString(2);
        array[i]=array[i].padStart(8, "0");
    }
    for(let i = 0; i < array.length; i++){
        strRes+=array[i];
        if(i!=3){
            strRes+='.';
        }
    }
    return strRes;
}

button.addEventListener("click", function() {
    let ip = generateIp();
    let ipBin = convertIpToBinary(ip);
    decimalIpValue.textContent = ip;
    binaryIpValue.textContent=ipBin;
});


