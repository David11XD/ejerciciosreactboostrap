import imagenFoto from './assets/Foto.jpg';

function PresentationCard(){
    let name = 'David'
    return(
       <div className="presentation-card">
        <img src={imagenFoto} alt='Avatar' className='avatar' />
        <h1>
            Hola soy { name } y estoy aprendiendo React
        </h1>

       </div>
    );

}

export default PresentationCard;