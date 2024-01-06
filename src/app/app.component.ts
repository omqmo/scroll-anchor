import { Component, inject } from '@angular/core';
import { RouterModule } from '@angular/router';

@Component({
  standalone: true,
  imports: [RouterModule],
  selector: 'scroll-anchor-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  title = 'scroll-anchor';
  items = [
    {link: `/`, fragment: `a`, label: `a`},
    {link: `/`, fragment: `b`, label: `b`},

    {link: `/products/first`, fragment: undefined, label: `0`},
    {link: `/products/first`, fragment: `a`, label: `0#a`},
    {link: `/products/first`, fragment: `b`, label: `0#b`},

    {link: `/products/second`, fragment: undefined, label: `1`},
    {link: `/products/second`, fragment: `a`, label: `1#a`},
    {link: `/products/second`, fragment: `b`, label: `1#b`},
  ]
}
