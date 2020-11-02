import { trigger, transition, style, query, animate } from '@angular/animations';

export const routeTransitionAnimations = trigger('triggerName', [
  transition('* <=> *', [
    style({ position: 'relative' }),
    // Set a default  style for enter and leave
    query(':enter, :leave', [
      style({
        opacity: 0,
        transform: 'translateY(-10%)',
      }),
    ]),
    // Animate the new page in
    query(':enter', [
      animate('200ms ease',
        style({
          opacity: 1,
          transform: 'translateY(0%)',
        })),
    ])
  ]),
]);

