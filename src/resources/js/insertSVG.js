svgRight = `<svg class="svgRight" transform="translate(-30, 0)" width="364" height="47" viewBox="0 0 364 47" fill="none" xmlns="http://www.w3.org/2000/svg">
    <g filter="url(#filter0_d)">
    <path class="filler" d="M359.307 38.3868H5.45613L75.118 1.40709H359.307V38.3868Z" fill="#0EBEFF"/>
    <g style="mix-blend-mode:color-burn">
    <path d="M184 39L78.5 1.53939H267L184 39Z" fill="#8A8A8A"/>
    </g>
    <g style="mix-blend-mode:color-burn" opacity="0.5">
    <path d="M266.816 1.62635L360 38L186 38L266.816 1.62635Z" fill="#A1A1A1"/>
    </g>
    <g style="mix-blend-mode:color-burn">
    <path d="M75.5 0.500005L183 38.5L4.50005 38.5L75.5 0.500005Z" fill="#6E6E6E"/>
    </g>
    <text x="320.307" y="20" fill="white">Dato</text>
    <text x="160" y="20" fill="white">Hold</text>
    <text x="255" y="25" fill="white">Fag</text>
    <text x="60.5" y="25" fill="white">Rum</text>
    </g>
    <defs>
    <filter id="filter0_d" x="0.500031" y="0.5" width="363.5" height="46.5" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
    <feFlood flood-opacity="0" result="BackgroundImageFix"/>
    <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"/>
    <feOffset dy="4"/>
    <feGaussianBlur stdDeviation="2"/>
    <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"/>
    <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow"/>
    <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow" result="shape"/>
    </filter>
    </defs>
    </svg>
`
svgLeft = `<svg class="svgLeft" transform="scale(-1,-1) translate(-30, 10)" width="364" height="47" viewBox="0 0 364 47" fill="none" xmlns="http://www.w3.org/2000/svg">
    <g filter="url(#filter0_d)">
    <path class="filler" d="M359.307 38.3868H5.45613L75.118 1.40709H359.307V38.3868Z" fill="#0EBEFF"/>
    <g style="mix-blend-mode:color-burn">
    <path d="M184 39L78.5 1.53939H267L184 39Z" fill="#8A8A8A"/>
    </g>
    <g style="mix-blend-mode:color-burn" opacity="0.5">
    <path d="M266.816 1.62635L360 38L186 38L266.816 1.62635Z" fill="#A1A1A1"/>
    </g>
    <g style="mix-blend-mode:color-burn">
    <path d="M75.5 0.500005L183 38.5L4.50005 38.5L75.5 0.500005Z" fill="#6E6E6E"/>
    </g>
    <text transform="scale(-1,-1) translate(-675,-30)" x="320.307" y="20" fill="white">Dato</text>
    <text transform="scale(-1,-1) translate(-460,-45)" x="175" y="25" fill="white">Hold</text>
    <text transform="scale(-1,-1) translate(-460,-30)" x="260.816" y="20" fill="white">Fag</text>
    <text transform="scale(-1,-1) translate(-175,-45)" x="75.5" y="25" fill="white">Rum</text>
    </g>
    <defs>
    <filter id="filter0_d" x="0.500031" y="0.5" width="363.5" height="46.5" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
    <feFlood flood-opacity="0" result="BackgroundImageFix"/>
    <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"/>
    <feOffset dy="4"/>
    <feGaussianBlur stdDeviation="2"/>
    <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"/>
    <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow"/>
    <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow" result="shape"/>
    </filter>
    </defs>
    </svg>
`

function insertSVGLeft(){
  document.querySelector('.container__left').children[i].children[1].innerHTML += svgLeft;
}
function insertSVGRight(){
  document.querySelector('.container__left').children[i].children[1].innerHTML += svgRight;
}
for (var i = 0; i < document.querySelector('.container__left').children.length; i++) {
  if (i<1) {

  for (let j = 0; j < 8; j++) {
    insertSVGLeft();
    insertSVGRight();
  }
}else {
  for (let j = 0; j < 3; j++) {
    insertSVGLeft();
    insertSVGRight();
  }
}
}
