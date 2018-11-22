# React Font Scaler
A component that scales your fonts based upon a base number and a scale you put in.

## How does it work?
The component `<ScaleFont>` is a wrapper component that traverses all of it's children components and picks out the ones that it considers text elements - h1,h2,h3,h4,h5,h6, and p elements are currently supported. It then scales those text element's font-size with the numbers it builds from the `base` and `scale` props.

## How do I use it?
There's an example included in the `examples` folder, but it boils down to this:
`npm i react-font-scaler --save`
``` 
import {ScaleFont} from "react-font-scaler";

<ScaleFont base={16} scale={1.5}>
    /* Text elements go here */
    <h1>Such as a H1 element!</h1>
</ScaleFont>
```

where `base` is the base font size, i.e. the font size of the `<p>` element, and `scale` is the number the next steps are multiplied and divided with.