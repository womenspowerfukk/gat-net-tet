"use strict";(self.webpackChunk_elegantstack_gatsby_starter_flexiblog_science=self.webpackChunk_elegantstack_gatsby_starter_flexiblog_science||[]).push([[834],{8676:function(t){t.exports=function(t,r){r=r||JSON.stringify;for(var n=[],e={},a=0;a<t.length;a++){var i=t[a],o=r(i);e[o]||(n.push(i),e[o]=!0)}return n}},2463:function(t,r,n){n.d(r,{gN:function(){return u},q6:function(){return o}});var e=n(8391),a=n(8676),i=n.n(a),o=function(){var t=(0,e.useStaticQuery)(A).allArticleCategory;return t.nodes?i()(t.nodes,(function(t){return t.slug})):null},A="4235339838",u=function(){var t=(0,e.useStaticQuery)(l).allArticleAuthor;return t.nodes?i()(t.nodes,(function(t){return t.slug})):null},l="4240507859"},3064:function(t,r,n){n.r(r);var e=n(7378),a=n(9321),i=n(3095),o=n(9835),A=n(8692),u=n(6138),l=n(2463),c=n(6495);r.default=function(t){var r=(0,l.gN)();return(0,c.tZ)(a.Ar,t,(0,c.tZ)(A.Z,{title:"Our Team"}),(0,c.tZ)(o.Z,null),(0,c.tZ)(a.Kq,{effectProps:{effect:"fadeInDown"}},(0,c.tZ)(i.Z,{header:"Team Members",subheader:"FlexiBlog theme comes with a pre-made contact form component. You can integrate this form with serverless services such as Formspree, Getform, FormKeep and others to receive form submissions via email."})),(0,c.tZ)(a.Kq,null,(0,c.tZ)(a.or,null,r.map((function(t,r){return(0,c.tZ)(e.Fragment,{key:"item-"+r},(0,c.tZ)(o.Z,null),(0,c.tZ)(u.Z,{author:t,withLink:!0}))})))))}},3359:function(t,r,n){n.d(r,{Z:function(){return p}});var e=n(4649),a=(n(7378),n(3493)),i=n(8945),o=n(1025),A=n(1115),u=n(7314),l=n(6495);function c(t,r){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var e=Object.getOwnPropertySymbols(t);r&&(e=e.filter((function(r){return Object.getOwnPropertyDescriptor(t,r).enumerable}))),n.push.apply(n,e)}return n}function s(t){for(var r=1;r<arguments.length;r++){var n=null!=arguments[r]?arguments[r]:{};r%2?c(Object(n),!0).forEach((function(r){(0,e.Z)(t,r,n[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):c(Object(n)).forEach((function(r){Object.defineProperty(t,r,Object.getOwnPropertyDescriptor(n,r))}))}return t}var x=function(t){return.35*t+"rem"},f={wrapper:{position:"relative",zIndex:2,textAlign:"center",mb:x(3)},pattern:{backgroundSize:"8rem",opacity:.15},circle:function(t){var r=t.width;return{width:[x(30),"full"],height:"full",maxWidth:r,borderRadius:"full",position:"absolute",transform:"translate(-50%)  scale(0.98)",left:"50%",top:x(3),bg:"alpha"}},arc:function(t){var r=t.width;return{width:[x(30),"full"],height:"full",maxWidth:r,borderRadius:"full",position:"absolute",zIndex:2,left:"50%",transform:"translate(-50%)",mt:x(-1),ml:x(-2),boxShadow:function(t){return"\n\t\t\t"+x(2)+"\n\t\t\t"+x(4)+"\n\t\t\t"+t.colors.omegaLight+"\n\t\t"}}},imageWrapper:{mx:"auto",img:{borderRadius:"0 0 9999px 9999px"}}},g=function(t){var r=t.avatar,n=t.withPattern,e=t.patternStyles,c=void 0===e?{}:e,x=t.size,g=t.width,p=t.loading,d=t.alt,b=r&&(0,u.Z)(r,x);return b?(g=g||b.width,(0,l.tZ)(i.xu,{sx:f.wrapper},(0,l.tZ)(i.xu,null,n&&(0,l.tZ)(A.Z,{sx:s(s({},f.pattern),c)}),(0,l.tZ)(i.xu,{sx:f.circle({width:g})}),(0,l.tZ)(i.xu,{sx:f.arc({width:g})}),(0,l.tZ)(a.G,{image:b,alt:d,loading:p,css:(0,o.i)(f.imageWrapper)})))):null},p=g;g.defaultProps={size:"regular",withPattern:!1}},1115:function(t,r,n){n.d(r,{Z:function(){return x}});var e=n(5773),a=n(4649),i=n(808),o=(n(7378),n(8945)),A=n(6495),u=["sx"];function l(t,r){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var e=Object.getOwnPropertySymbols(t);r&&(e=e.filter((function(r){return Object.getOwnPropertyDescriptor(t,r).enumerable}))),n.push.apply(n,e)}return n}function c(t){for(var r=1;r<arguments.length;r++){var n=null!=arguments[r]?arguments[r]:{};r%2?l(Object(n),!0).forEach((function(r){(0,a.Z)(t,r,n[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(r){Object.defineProperty(t,r,Object.getOwnPropertyDescriptor(n,r))}))}return t}var s={pattern:{size:"full",backgroundImage:"url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAOsAAADpCAMAAADyHDDsAAAAsVBMVEUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAGAgIBAAABAAAFAQECAAABAAAGAgIBAAABAAAFAgIDAAADAAACAAAGAgIGAgIGAgIEAQEGAgIDAQEFAQECAAADAAAFAQECAAAHAgIDAAAFAQECAAACAAABAAAEAQEEAQEDAQEEAQEGAgIEAQEFAgIEAQEDAQEDAAAEAQEFAQEFAQECAAACAAAIAwMUeKkUAAAAOnRSTlMAGxkTCQQMIhYPHyYG3ypAwUUy2js31Wt+ZvTl6p3wg8VcdMpT+3C7YU4uoqaOmPirz5KJea+3s1dJOago/AAAGaFJREFUeNrM2olS4kAUBdDb2TpkIULYN0UEUVBAFOX+/4cNo0LCGJIGgjWnyqVcmrqEfq95gAvRHCgR7yUk0aSzIwX+X8arTzahosk5EnxwTx2Xcxu6OF2pxY07tb/lUOKnaw5bs2+tIbtQ87hYDGIWYZAdlSzhZA9kbW1B0T17ffzQ4BLGN9wqZ+2TRz4gXslbnMzusQt11oAMiz+zNrDTVF+wug5i1hUzO2odp1vyCkdptjgs/sh6jZ06u7iMa3KEM/hcI8Y0kemNXcDzkrOaGLEL09swzNyj1nEGyZmFHUs4NjKNeQ/oTmLWgosGpxDOhnALF4xq6jhSlX68S+rINv6qD7KQlFWzY49h24YqTWgRYSdutv2+KDUcSZC7fEIiW9Un37FhuFpCVluPZdV1qDL2eIlRx+dFBQa7JQoqUT8YNR3NLWRmzcvTP1FdDccb0TfwydGRSe9xgh3DNX4p6wvZz45aeHgJ+0hR48DChukoXdabpGN01F8ND838s5bJj72oNv5lVho3QzK937kttpYVF4ZAtjrniHHsbdauXv7rsVSynvLP6i3ToxZHbz1u3HTYRxr7hhtNCKWyzQBbphRRO4i5xH49HFWMJx1udLp9z5zRQbqgGw5LcDxkm5BPHj7Z0W1W/HZM5+GSWc141MpzyI3W+8jFxh0HUOIIqIWdrb+qMOL24qVk1eW5UWOLSpKd+9cqvj1zCSWea0BBtUYGgCWRpGBlZF3xxcMZpI2Y+X59DrnGJ0uXFtIUihZULPkG2AJJ7KzrGpKzJk5nYM80XkBcDguAp2tCFIo2UllS6IZKMV4BuoMkmjQKW4bUklqcT/oB8jIhH6JnkyvYQgjdA4SHDLqwkcF4IccHD2mGIyKOkXRdi+UeeSWRk+dopjJnA98XyxI433hIXn91HGngeCErQINk18o1rK5ZoscyvmkalOi3q9pg8nBoMrDYLqi79ilZAwD6nByO8jtAfqBYRJVtbAkdKm75JXzED3J/3uMWTswKFAdke53jaVnEB12mNKFgSl71q0GjQ64TZqZX+5Xo5KxAv0cOink9C+oDA/ajugMFjd1WnyfMR0t8RYzUz8gK1NtkF3lYkg8gHUQjg2xObFL8zin+ZZmx70/er580E2OSQU5he28MzV0MC9le+Y6tR1LDYUIWcE5WiDeyNy4II6dpFJfQtp0PClbxoc4N+xDCNlOOz6dnNZ9JPpmALoWZT9j1tunbAgpqrMbL1C2MgpZ4/XSJs7KOW+RKwydb2kjjmVDQmJuA1NQ7zg3X0ah49VXYPDfhXy3rnKyVGulXsGUe2A/V9vjvZ06gTAoAjqfWql52abTtOcR0DeQlZAViRfbGBuKKbvILPnUUZ5ziqLCWo/pCnMAnA3Uu8EV3cswa1Ek+AXY8rO7YBzbhy4IrHEPqugYl9xxE49EPfHM85KTGGfluA4jqb0p56pOc4jha1YIS0WP7zgT0Lvkc/bSQX1bWqkA8qyUP35V6h3zBcUwbiqRPzhY+yScoZV32anGdN6R55hiIZzXT+rQVstbmOy5m1ObGIEAkrd9fcV/HQqZoTTvtnGmEDOEOeYPLkZWqDhOAyssfhUo1LhBQz6q7qeeIR/a0v599XJi04mf8/GmmIR0DqQI3GtilU1lnfIcDrKIRHQcvQLqJG9Wrl7ExGSE/Zc5c4DXl8VFwNe/vF6khTxljkjVZBea57lGjxpl2l/oOBFNzhCacgvKSjohxLJzkisPyNVlBnu7ZGnKEVEe96cE09pg4zZTkrIJ8XZFz/IdqZBf5qsxIjvF7bGkqD/dukacS2RhtPvBLvCnZDpSiPvTJJY6idduLPg4wOpx8Luzgd7yTQ4WS45AjoEkfx7A7ZMr9M59iY7xUXu7pEWcIOHPR5RuyPI2w8XB35PB/IOvkI/LxzCucofk3ZsAaLsJnALyxiVxUybOWCjgsY3Kpwn/DOhDyLq9u7LNjnbdfN6o4kVHqj9dGypvp7kOGyEWfncKKS5zO65JhBSdqzLgxXJqHfk/Sl8iD0eYIwZmb37JxIjsk/enEJ9sSyZyPwEQullwAmHAVzUt/kRd+d+ZyyI6Oy3LJEgBn+Ln7i0X8rheGFr4sOMVlzb9v4ZUhoNmagBIreESK4jqIlHQcosWOIEXSxSU9kBKfQr5CmnA9ZKvep9ddl3tWOKQf7+xvvIWue7iUGq/x5Y4sA7Cl0gvAbC1E6oE8DP0vYZt+ykov8YI7hx297yRvt/zDzbl3JQ4DUXyStGnTFuQhKMgCijwVAVFX7/f/YIsFNikbSnl5OPv7wzMclXKbtjNkbpJz9WmNqzxPZbBsvDJK49ocrlKK1hvUzBe3tEDkFZ0Bv47PzaeU8nabqr+IsmpNnyx0masnwaLV/K2TP8fIviRupfGyyxNwSqUTn/59xrWcrVljfBumk3MFhMmbtxc3Kl1KYYS6JAPppGp16Bq5iOSC1AlSFSQnde28zAqaquWcy8IbWZmh8V5oLyl0ZtMcJgERsSC9pPxNGj8IVJpWGdIXckLxb9Ks/IyZLzhZySNBU1mGL7ftbk2y9nOEMqOB3PWYk34NC2ZcwzJFq5IZ2t0hJo9fj0uKA0DYEvYj2RgNFv8zjPmqfS5+fl7tdhEMMdPHFkQ7tHL9HNZaDyVEwzghgLL2dV8kpeNarLxWRPdvFcEC+mmtTf05fUBtSf73O1s8Giek7fxC4a9d7gK1UmmWLtZnti6FHVbHh5tul7v+m8vciPJn0crlCBg57JvNBlwPVaLIITt5jzMD7uVTsyfqr/cVEnx7MisXh48LhoNa5QHl02t1QvIARnKBw73ND9hwSXpkJ5JKGigZUQreDAtKxLZrNTmLVm5cww4jk8EEryfsQV6P2x+CAtqCfG73Yz4KhX5/VjuDVrZN66gMFOK/Cva2fA9ypTirDqxl3S4cqeMf0VoEmoNDLd+vmFTo3trhlKFLO1D6aCfNr5EgYdVaxvMR1uA+7lp1+zyj2PmNRPATa12Pq5/Uaj6WjvFWjrG1b6087stUrXlHrZFBQMeRB3LGHMDE11p1BrBU2dm5AvBJW1DpZjCXGzBJx+E3YVKlf7TKJh70wQNv/xZIdYJbugR4Kb+kdBXmS/6/WukGaIfrJZBi/9W4U7oBxnRJuJI0plaqAZgvpbq0JzfoE9HgPJO3jrHQj5UcHQe7/pFte0HiCXjQ1fo+OF8iPksRnYFn1G8ohveBySr2P3Z1rrWR2LYIYIhcPNFxWYzXF5y4Q7e+itUdMBlRKm7AF/h+/GNzhqz4rTXy6NKoAVfxAM8UDdZx1c/mQooiJ4ZMotelVYRfntgxCnFay8dxexUfzmN3bY/mnqLLQjRxK8qrq3cRq2ocH8rAWALpeJd2z95jQdk1Yoc0Ee2F00CLNAGnUxB5+mMoI5UJRnsyzGGqKGDLeNLP69XGat/i/cpSDx/PL9R7FCOmQHMVq/dDtk2LP96qWpZSx2rvbgef/LJsCXIscwDjlXO/213FThn21Ji9y+E7Og7lYadNr9I/YbooxgOcC2iwjF+OcXFIzxjdUFdPh8I8SSdjjg5RBagk4sPhnuuHlvgwWEAnRDZwG82W2cxZxG7nSMesCFiUjA/H8eikfGJBTur4Tm25dX6eSNKJxTbQ56sUMWxgVtLpQoaC/jPMdKGEjmVe0oXDa/NxjR+4b43v6PjiatFN/Clipj5lxkwROuaXVoluUukC/fm8D3Qr+xv+xbpQ5GEcXzSsjg6Lgw7q3t5iA0fHLKLL5h19Pf/9m/5nRoBnLEMo0X/Mm+lif8Itcf/i08ahvKBnegOfSfjMO5NaN3INItv9P5sq0pxT62rbR3We4qeHugnqoc2+2e3RuXjQ17CiJ7zFkXuW8ucWG5RsWoFckbJSfGlXf/fE1vwvtzybXOPZJEI6Azy5xlSRRevHdU73ZnYQVrHkjWzUJkBrW875wHtiE6Gfp4gC0RuApwzHvwaa82Llvg08W9s0mGwsUwvWtcSoinpyc6ifp4j2qjfTfaAd8Oa6HHjUkjTuHXrfv0kIKdWBwnxeAOoVor23y44c2h83waZWorADNIaZ18g9WhYNeIAgyqFCJmKKmHdFtOe48sFTs8HS5qhrVqmMcU2gklpjho0du7epiSHj3dIpzuGN7tHdFMIGrdZ94qGVwX6vhuMyvhmlzcM9kBXXHmut5Nx0gWeV4gatmjPrnUgwJpMH/6ZFVozz6weUinvV6uCb52e0U5q4aB1yv65nAApAIeU89hMGYpekSM6W3jcx6ZEdlXeJMnjvS72PLhZUx1+SWpifTKqp1SXVagIPW710QfvT6ED8frNseuhyuwxzLYWfUkqM3htYcPfy6K8c9MXtUm/pYK1OawI8KVLe7v2XRHiABcYJGPd5kPbuY+Du9SbUfpyJJCs9LfUArcO7vxWF73FKx1NGLCkrjtixBkqUEx212jrHKR4ESanJasaPMmvdTDkuC0VmZwHndDpUGTn9flP0iGS8SXDiXnnYkBoE2cdVPQH1W0Uahwcyo0tOMTohqoo/1Z2Ldqo6EIYnhHAHFe+Kt1q1am21tbad93+w0+Il4Qg0Ing831p7rey1rz+EMEz+zHQJ7GEBVoAQxeThR2wPIJ3IzuFdWI6i50BEnOmbaYEJFJaLVxsYWPsd4W/smg7jtb641Km81Ki/Y4NY1qP2TZOXb7s56gYDPawXNMAl96hEusVkkgrfp086rlW1dA3+O9gYAwK+CjNuMKYW8IndBgGbXGKXm3JbLl+YCkFebP/3zgqJOWJwU8pX5m4xNR241sML5z9niH0b2kJfBTEYzSKVw7WaunUX2fUydmCLK/5U5SSVa1Ut/V5SmmV0u/iUdNaHN8bJhmkZ+h1tb84QA4WaaYXas0cxqmfAPTHDHYAXik3oq8AgHTLoVeA2mGImQhPapzGQQdv6AE4oViMZy2vdqmxaPfxqCnnq8iTAqItLkMfxaMbJSvv40erjFrLCmHSlfh8RG+ohTT1BrGqHMb7AhWIJzeRJLPNcShYagQGgumiDBJ6LvX2m9QGsajiu48UX2rENBTJp3QFUrtGKAYUxBlR2GtcAZuGN9MPxLhxfBvMtyIDyii+jLg4gK9oGG2UMFPnCZjDFPt2PN9DE1wz3yHGy+v0Qh9cVtsHAAEnMLp6KkWkuH9/GmOW/9dpX+l5xUgNZrCH2R0DDk5SkjJ1WON5D9LsIR5NZYvVDtv4l78lBPWd/6IWdxnDXHbgPd7UOK8Sviy0toW7Kx7kciVBLHhTGDivhS7KUxbTMPIePbQeu5vEVsUyhIDQjLWecfvKL2cZxbIbjHGrPuH0cw+3Zpd9szbJoZHw9a3wDrYtzuDWPeMsrzHdAltiEW9PIr91/qxe64V3rz4VyBxXEGtyYLe6a2Kc5XbZPgNbfPn97gj88w42xJvgNQ3yDPChNcDmVqf3qzbA/gFuzxM/wg8bPJfazXX6cvWgWgwdOq+3IrP6LMLyfhZebXv9EYN+ArJDW53C28mUL4nKkrvAYV4eqXCMAxSOQxHu1LNJYJa3pAfbt7Id9Q2amXMLyY/C2ZzVw/45+2xiYx9qIAHbK/nMDo1QTpLZgiFjPWpt/N6rNexMMdKnfXhLf2CNIx+RbLA1sAU1peWXNKyJzK95g/RLmEdsZzx/WwgHdYENKa0X8l0d/TpqhsBVWu7oaod9kAGAuGFxOhU8Hx8Vt3lp9sfXhM66FAjG3p4cr4QhX9RKtmgEzbILxi0KTAuFeRPicV/W8Pa4QRqkdLIFCqKRWi3CtRvxT+IUuixjnGlInnTWiCBAVcsGIdLXc4COolOialFaFCXM4thW14+Lue9rc0241nya45VU9C2mzYo+mjwrEonaEdK7iYp2fTZPR+nnSaqixBsgzXCjylNR3FX+Z2RAHX70Z+IiUF8DKQau9Xj8fWX4+/7CbQoGn33qIr7uXYVKvhCmvSgQvuOaGM9k5zLWmw9LO6+fWbbl1tOqO4h+pJXdB+UfdlkQs4QCspbUy3ZGr6pmdb16SYIAdGh+aj38lWp/idoql/hkjrnpvPEZM1SpaoPnFzJ1PHAimim3CFyH2h260g5ClSsb+j3Ja1QU1qYDj6ZAzCqIuvOyGoFLtPGRddRBxMlsIM9uCJLzWw55pazttPYGkVoMaERQTcqaObqQKvg1GXINJ5lfqGjCQdmfzhsBJWm9PDRviTybhpnusQ4S/4aULaCjqf6d10W/HNDSgoic/1flj2II16M61NmMOzG7wqN/kYX7SHoKhU3ZBWU6iGxzdgVuyQKyc6+8Q/kW/+MP8oxKLEEu2hCKj5gmqwm15QXxRz16HgX9MSQ0kLMzqf77G7Hmc/x0k4dfZxj7OHtqtBuKSC7r37U1+iDKZxfh8Hr9hyOuTcAHuXuunjNNqgB//nohKs7d++9KBo9yBNTaVR+y84vzvxXgX/xkhGoH0O3koE3HxcYQbSEXrIY7iX5DMNgUXfB6wwTcUQwsbAN30Dp/t4/E8FmP2VQ/2daZbeQVlGygEPfykGO1rGzMtaadj7CXX6WaWZVCq5Pbp6CF6UATP+xPdszAHSesqnGPxDd2EPIdqKAZlkBcf2J9D/lQQPTg695gVk5ziJ8z4t0rBqBvEjQ55s8HV8W05BIOAbqRqvVX1pofJVYVczF6/v3LO3iRd7eTybQMD1U6bw/zLrWjYB+4y7yCzBqJwgJgL5HevoyRk+lqIQ4/XJSwc3nfDylg5pOr5XXwCkTdR/HB/dtlWYw/04uCSXvzMDOdATYWMeI0wzLZptrWtCeJJm9OCJO62LpK29rQl4uiC3aFVeFGXOIVMaM+IXSV8dyuZNrnXALtoxm+Hg2jIu+Nbe7ExokFAjgHiFF4QK5AFu4/YU48H7cwsPUO7Xewr0WhoOei9HFgPnve+VU2PD68+wl+SZIuTDeJ31pNtG0sIy7TkG9iDWEp9xKAeDSPOWCY8lN7hm47oF9jnspr2/GhynVrJOYQOTfK91hiI6NNm+8DTQ+up3W42CU8bxX+rKzaVrnedzWV11vbbIIlSc+hqbehnf2lPO5VNJXLLPr65GdudW5Hn3EhyrfcySlWi6nQzJbdmUak64Q/gT/A5874YL6mcLHUOGWAWAxHNSsmZKpaM1i0ALLrbrO477FfSm/gss658ZEEVEbqgiblwJpW7Z3AVFTe8a0xPkVoBjmqCLEwzf9FOxFkJZJu55FbXOiUH+xyVyor4T6k3O25dwiA5L/mBWCpUagF2KXX+VoJYHju4Cl08MlK9IqRSC3KD1bflCeJHQuSP5UMOi8XleOuFSwVHhXyw2x/hPvQE32Pn76n1DtCz+TmNSnW8Ozrw/m/I6KWLPwTLR6WKpVgT7EdKHsQvl0Sp9r0Wudbm71X8ofM5XYQZwz6L+0zvq7IPjuPdq1Q1wB+GgxI7Tsd1bM50BwJE+T9KBWhE06+fpxSQqmhwwjbEkE4vWqoXxpr1AYVccTY4VvmMnoSmRYcqlrFQIIJMi0yWz7M6xAGAN8E55C62b3NDWAMchRCFqqBoCWXZi2/f8IDYMgMsQ37w2kHeKQ7sAaFqsvFJteEWjBBf85XKp0xnAcCo4WzwK73jkmpCwfDEgg5FUMZXDzwvbMocUxfq9rAZIs5U4OQq1gcr9PbF+BRvzxjHpSo2KBTBDCc+wDMOhORA3qi1rzmR/HwMCFi8AkbuYtGGAEtC/ixfzLcJ/rCpyaQ8NwsA0N88KIZPdKf4SuEAoZAT3M/bnW3CNoU3hClqkl14zUzYYzmQJ/WDT1sdXClWUwwBBqnU1n0cJuUW2vuTnPn3OG2c4uzvq3LIJECR5R8OhR9mEC92QsDxaAG+qCd0Hb43M7zKdSDi/nFUcpVc0JmdkgqWCXmyxgfxUJQHVMu6CTwEpu2BWqrW9zBCSiUU61iQKy6WxDCtCYToRiat4pxcpGklUulqZmsayftxJeK6UAnjbT2T1rK4pVZN60KyS/bxc5jlU8gVnc8mhVD/MNKv0sr2c1gNgShn2+qGlRQHOtlqKvmtZa+1+CufzcR8b3atqg3f6FKT/BDnWlvjl/CPKirkiT3GkKEOKYgLvGldoZWScA4nWsJ7uBV7refKHLHTazaXr+lrQsS1o6tXaFXAR/cUYcR4wMbS8ydDw38Wzv9PxJR5TBlwzAK10g4+FXR8sYzP/EmZgSzFaYUp4mMhvWtqQrMRRbImxHXvV0eFRapW6CHO5nUTFA2k8Oq+QF1P9jz3xOV+AIpBQRLFgyNsYQtjGrfZsrH9+g9+Za48YTVNK2zxhw2YpqRRKELystPDqfinlmBSImkJpR1067yhjVs7jat/xsPpWkFpDfEZqCLZXjfoCvSDBcTzItrYV4fW2XJ7WOoYEUuH7GGnw8dxO4Z0GLiczoBrTULCA5a9LRuF9XErwTOlyy3ua+a8H8f0ZyxR2BxktIJFIE+804uGwQLRvnC1d/HhVAupilvuQU1Go1Jaiyg4uTwdfzDHuLy0LdsXYu3rsHw//ox/f0A6VJHXCkSnJgNpNFPjnAcBNMBqPVw9AuzSi9uyPQt9o5b4w+qvTxRqO9w4Qwiko11Uk0QhAjHuMb2LWF0uXcSulaEt26ATTI+HbQb9YMXMU2SnxHqaWHJ/weJx3ifI70iWbCR3WpgOH5O7bNCslabTUiTgvfhcsGqzcO+XHzU3dbhfdBoxD8rD76Jt8vHdui9+0Tzn1OaMZbhUiqorfHzn9YkPbWyZYmdqA0l0QxjfVxeJcxxCDGpYhMGt+Qe+yC4aLLg2xAAAAABJRU5ErkJggg==)",backgroundSize:"11rem",position:"absolute",opacity:.05,top:0,left:0}},x=function(t){var r=t.sx,n=void 0===r?{}:r,a=(0,i.Z)(t,u);return(0,A.tZ)(o.xu,(0,e.Z)({sx:c(c({},s.pattern),n)},a))}},3095:function(t,r,n){n.d(r,{Z:function(){return o}});n(7378);var e=n(8945),a=n(6495),i={count:{fontSize:4},subheader:{fontWeight:"body",color:"omegaDark"},runninghead:{fontWeight:"body",color:"omegaDark",mb:0}},o=function(t){var r=t.header,n=t.subheader,o=t.running,A=t.totalCount;return(0,a.tZ)("div",null,(0,a.tZ)(e.X6,{variant:"h1",as:"h1"},r," ",A&&(0,a.tZ)(e.Ct,{variant:"tag-white",sx:i.count}," ",A)),n&&(0,a.tZ)(e.xv,{variant:"h3",sx:i.subheader},n),o&&(0,a.tZ)(e.xv,{variant:"h4",sx:i.runninghead},o))}},6138:function(t,r,n){n(7378);var e=n(8391),a=n(8945),i=n(1115),o=n(3359),A=n(9642),u=n(2551),l=n(6495),c={card:{position:"relative"},wrapper:{flexDirection:["column","row"],position:"relative",zIndex:3},avatarColumn:{flexBasis:"1/3"},infoColumn:{flexBasis:"2/3"},innerBox:{flexBasis:"1/2",flexGrow:1,px:[0,3],mt:[3,0]},subheader:{color:"omegaDark"},name:{textAlign:["center","left"],mt:[3,0],px:3},bio:{textAlign:["center","left"]},socialList:{a:{m:0}},link:{position:"absolute",top:10,right:10,zIndex:3},pattern:{borderRadius:"lg"},gradient:{size:"full",borderRadius:"lg",position:"absolute",left:0,top:0,zIndex:2,background:[function(t){return"linear-gradient(0deg, "+t.colors.contentBg+" 20%, rgba(255, 255, 255, 0) 80%)"},function(t){return"linear-gradient(270deg, "+t.colors.contentBg+" 20%, rgba(255, 255, 255, 0) 100%)"}]}},s=function(t){var r=t.children;return(0,l.tZ)(a.X6,{variant:"h4",sx:c.subheader},r)},x=function(t){var r=t.name,n=t.thumbnail,i=t.slug;return n?(0,l.tZ)(a.xu,null,(0,l.tZ)(a.rU,{as:e.Link,to:i,"aria-label":r},(0,l.tZ)(o.Z,{avatar:n,alt:r}))):null},f=function(t){var r=t.name,n=t.slug;return(0,l.tZ)(a.xu,{sx:c.name},(0,l.tZ)(a.X6,{variant:"h3"},(0,l.tZ)(a.rU,{as:e.Link,to:n},r)))},g=function(t){var r=t.title,n=t.description;return(0,l.tZ)(a.xu,{sx:c.bio},(0,l.tZ)(s,null,r),(0,l.tZ)(a.xv,null,n))},p=function(t){var r=t.skills;return r?(0,l.tZ)(a.xu,{sx:c.innerBox},(0,l.tZ)(s,null,"Expertise"),r.map((function(t){return(0,l.tZ)(a.xv,{key:"skill-"+t},t)}))):null},d=function(t){var r=t.social;return r?(0,l.tZ)(a.xu,{sx:c.innerBox},(0,l.tZ)(s,null,"Social Media"),(0,l.tZ)(A.Z,{variant:"vertical",items:(0,u.Z)(r),wrapperStyle:c.socialList})):null};r.Z=function(t){var r=t.author,n=t.withLink;if(!r)return null;var o=r.skills,A=r.social;return(0,l.tZ)(a.Zb,{variant:"paper",sx:c.card},(0,l.tZ)(a.kC,{sx:c.wrapper},(0,l.tZ)(a.xu,{sx:c.avatarColumn},(0,l.tZ)(x,r)),(0,l.tZ)(a.xu,{sx:c.infoColumn},(0,l.tZ)(f,r),(0,l.tZ)(a.kC,{sx:c.wrapper},(0,l.tZ)(a.xu,{sx:c.innerBox},(0,l.tZ)(g,r)),(A||o)&&(0,l.tZ)(a.xu,{sx:c.innerBox},(0,l.tZ)(a.kC,null,(0,l.tZ)(p,r),(0,l.tZ)(d,r)))))),n&&(0,l.tZ)(a.Ct,{variant:"tag",as:e.Link,to:r.slug,sx:c.link},"View Posts"),(0,l.tZ)(a.xu,{sx:c.gradient}),(0,l.tZ)(i.Z,{sx:c.pattern}))}}}]);
//# sourceMappingURL=component---packages-blog-gatsby-blog-pages-src-pages-authors-jsx-f9fbd0f5c5515c64e4d5.js.map