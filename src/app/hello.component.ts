import { Component, Input } from '@angular/core';

@Component({
  selector: 'hello',
  template: `
  <body>
  <div style="position: relative; left: 0; top: 0;">
  <img src="https://imagesvc.meredithcorp.io/v3/mm/gif?url=https%3A%2F%2Fstatic.onecms.io%2Fwp-content%2Fuploads%2Fsites%2F12%2F2020%2F03%2Fcrowd-virus-flu-sick-symptoms-AdobeStock_329654183.gif" alt="Cinque Terre" width="100%" height="100%" style = "position: relative;top: 0;left: 0;">
  <div style="position: absolute;top: 60px;left: 10%; background-color: black; opacity: 0.8; color: white; width:50%;border-radius: 25px; ">
  <p></p>
  <h2 style="text-align: center; color: coral;">Bienvenidos</h2>
  <p>El presente es un proyecto que tiene pensando analizar algunas pandemias que han llegado afectar el mundo tales como: COVID-19, Ebola y VIH.</p>
  <p>El proyecto actualmente se encuentra en desarrollo.</p>
  <p>entre las funcionalidades se encuentra:</p>
  <p>1. Mapa que muestra areas afectadas y al presionar sobre la mista este mostrara las estadisticas respectivas</p>
  <p>2. Hospitales y Clinicas al rededor del mundo</p>
  <p>3. variables externas que afectan a cada enfermedad</p>
  <p></p>
  </div>
  </div>
</body>
  `,
  styles: [`h1 { font-family: Lato; }`]
})
export class HelloComponent  {
  @Input() name: string;
}
