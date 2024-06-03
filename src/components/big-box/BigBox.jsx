import Container from "../container/Container";
import style from './bigBox.module.css';

const BigBox=()=>{
    return (
        <>
            <div className={style.cards}>
                <Container  icon='sedan' title='SEDANS' text='Choose a sedan for its affordability and excellent fuel economy. Ideal for cruising in the city or on your next road trip.'color='orange' position='first'/>
                <Container  icon='suvs' title='SUVS' text='Take an SUV for its spacious interior, power, and versatility. Perfect for your next family vacation and off-road adventures.' color='blue'
				position='middle'></Container>
                <Container  icon='luxury' title='LUXURY' text='Cruise in the best car brands without the bloated prices. Enjoy the enhanced comfort of a luxury rental and arrive in style. ' color='green'
				position='last'></Container>

            </div>
        </>
    )

}
export default BigBox;