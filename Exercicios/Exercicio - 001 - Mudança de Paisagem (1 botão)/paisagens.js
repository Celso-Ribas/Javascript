

const turnOnOff = document.getElementById( 'turnOnOff' );

const paisagem = document.getElementById( 'paisagem' )

function ispaisagemNoite () {
    return paisagem.src.indexOf ('noite') > -1

}



function paisagemOn () {

    if ( !ispaisagemNoite ()) {

    paisagem.src ='img/tarde.jpg';
    }
}
function paisagemOff () {

    if ( !ispaisagemNoite ()) {
    paisagem.src ='img/manha.jpg';}
}

function paisagemNoite () {

    paisagem.src ='img/noite.jpg';
}
function paisagemOnOff () {
    
    if (turnOnOff.textContent == 'Tarde') {
        paisagemOn ()
        turnOnOff.textContent = 'Manhã';


    }else {

        paisagemOff ();
        turnOnOff.textContent = 'Tarde'
    }
    


}




turnOnOff.addEventListener ( 'click' , paisagemOnOff);

paisagem.addEventListener ('mouseover' , paisagemOn);
paisagem.addEventListener ('mouseleave', paisagemOff );
paisagem.addEventListener('dblclick' , paisagemNoite );
