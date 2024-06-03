import Container from "../container/Container";

const BigBox=()=>{
    return (
        <>
            <div>
                <Container icon='sedan' title='SEDAN' text='Choose a sedan for its affordability and excellent fuel economy. Ideal for cruising in the city or on your next road trip.'/>
                <Container icon='suvs' title='SUVS' text='Take an SUV for its spacious interior, power, and versatility. Perfect for your next family vacation and off-road adventures.'></Container>
                <Container icon='luxury' title='LUXURY' text='Cruise in the best car brands without the bloated prices. Enjoy the enhanced comfort of a luxury rental and arrive in style. '></Container>

            </div>
        </>
    )

}
export default BigBox;