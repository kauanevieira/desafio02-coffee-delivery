import { CoffeeCard } from '../CoffeeCard'
import { TitleText } from '../Typography'
import { coffees } from '../coffee'

import { CoffeeList, OurCoffeesContainter } from './styles'

export function OurCoffees() {
  return (
    <OurCoffeesContainter className="container">
      <TitleText size="l" color="subtitle">
        Nossos cafés
      </TitleText>

      <CoffeeList>
        {coffees.map((coffee) => (
          <CoffeeCard key={coffee.id} coffee={coffee} />
        ))}
      </CoffeeList>
    </OurCoffeesContainter>
  )
}
