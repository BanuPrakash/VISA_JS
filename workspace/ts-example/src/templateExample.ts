type ChessLetters = 'A' | 'B' | 'C' | 'D' | 'E' | 'F' | 'G' | 'H'
type ChessNumbers = 1 | 2 | 3 | 4 |5 | 6 | 7 | 8

type ChessPosition = `${ChessLetters}${ChessNumbers}`

let pawnMove: ChessPosition = 'A6';

type GapType = 'margin' | 'padding'
type PositionType = 'top' | 'bottom' | 'left' | 'right'
type GapCSS = `${GapType}-${PositionType}` | GapType

type SizeType = 'px' | '%' | 'em'
type SizeCSS = `${number}${SizeType}`

type MarginPadding = {
    [key in GapCSS]?: SizeCSS
//    'margin': SizeCSS,
//    'margin-bottom': SizeCSS,
//    'margin-'
}

const boxCSS: MarginPadding = {
    'margin' : '10px',
    'margin-top': '5%',
    'padding-bottom': '10em'
}
