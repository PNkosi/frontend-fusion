import chroma from "chroma-js"

export default function Converter() {

    const colors = chroma.scale(["2bc",'yellow', 'darkblue', "#ccc"]).mode('rgb').colors(12)

    

    return (
        <div>
            {colors.map(color => (
                <div key={color} style={{backgroundColor: color}} className="h-10 w-10"/>
            ))}
        </div>
    )
}