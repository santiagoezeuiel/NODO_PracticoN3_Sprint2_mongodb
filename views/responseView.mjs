export function renderizarSuperheroe(superheroe) {
    return {
      Nombre: superheroe.nombreSuperheroe,
      "Nombre Real": superheroe.nombreReal,
      Edad: superheroe.edad,
      "Planeta de Origen": superheroe.planetaOrigen,
      Debilidad: superheroe.debilidad,
      Poderes: superheroe.poderes,
      Aliados: superheroe.aliados,
      Enemigos: superheroe.enemigos
    }
  }
  
  export function renderizarListaSuperheroes(superheroes) {
    return superheroes.map(superheroe => renderizarSuperheroe(superheroe));
  }