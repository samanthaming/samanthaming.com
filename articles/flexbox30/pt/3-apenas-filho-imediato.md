# Dia 3: Apenas Filho Imediato

Uma coisa MUITO importante que quero salientar é que o flex container envolve apenas seus filhos imediatos. O flex container não envolve além de uma camada de profundidade. Apenas os filhos imediatos. Portanto, NÃO existe um relacionamento com netos ou bisnetos. Apenas pais ↔️ filhos imediatos!

Claro, você pode estabelecer um Flexbox, desde que haja um relacionamento pai-filho. Portanto, um filho também pode ser o flex container de seus filhos. Mas será um flex container separado. E não carrega as propriedades flex dos seus avós.

Este é provavelmente um dos conceitos mais importantes que me ajudaram a entender como o Flexbox funciona. E saber disso ajudará a resolver muitos daqueles momentos "ei, por que isso não está funcionando" 😅
