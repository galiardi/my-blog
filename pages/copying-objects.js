export default function CopyingObjects() {
  return (
    <>
      <main>
        <h1>Copying objects in javascript</h1>
        <div>
          <div>
            <h2>Asignando un objeto a una variable</h2>
            <div className="code">
              <p>{"const object1 = {a: 1, b: 2};"}</p>
              <p>const object2 = object1;</p>
              <p>object1.a = 3;</p>
              <p>
                console.log(object2);{" "}
                <span style={{ color: "blue" }}>{"//  {a: 3, b:2}"}</span>
              </p>
            </div>
            <p className="paragraph">
              Cuando asignamos un objeto a una variable, la variable almacena
              una referencia que apunta al objeto en memoria. Por lo tanto, al
              escribir const object2 = object1, object2 esta almacenando la
              misma referencia.
            </p>
          </div>
          <br />
          <div>
            <h2>Shallow Copy</h2>
            <div className="code">
              <p>{"const object1 = {a: 1, b: 2};"}</p>
              <p style={{ color: "red" }}>
                {"const object2 = Object.assign({}, object1);"}
              </p>
              <p>object1.a = 3;</p>
              <p>
                console.log(object2);{" "}
                <span style={{ color: "blue" }}>{"//  {a: 1, b:2}"}</span>
              </p>
            </div>
            <p className="paragraph">
              Aqui hemos creado un nuevo objeto, por lo que si modificamos
              object1, object2 no cambiara. Sin embargo, si sus propiedades
              referencian objetos, se copiaran las referencias, por lo cual, si
              modificamos el objeto referenciado, los cambios se veran
              reflejados en object2:
            </p>
            <div className="code">
              <p>{"const object1 = {a: {c: 3, d: 4}, b: 2};"}</p>
              <p style={{ color: "red" }}>
                {"const object2 = Object.assign({}, object1);"}
              </p>
              <p style={{ color: "green" }}>object1.a.c = 5;</p>
              <p>
                console.log(object2);{" "}
                <span style={{ color: "blue" }}>
                  {"//  {a: {c: 5, d: 4}, b:2}"}
                </span>
              </p>
            </div>
            <p className="paragraph">
              Cabe mencionar que si en vez de modificar una propiedad del objeto
              referenciado, asignamos un objeto completamente nuevo, este cambio
              no se vera reflejado en object2:
            </p>
            <div className="code">
              <p>{"const object1 = {a: {c: 3, d: 4}, b: 2};"}</p>
              <p style={{ color: "red" }}>
                {"const object2 = Object.assign({}, object1);"}
              </p>
              <p style={{ color: "green" }}>{"object1.a = {c: 5, d: 4};"}</p>
              <p>
                console.log(object2);{" "}
                <span style={{ color: "blue" }}>
                  {"//  {a: {c: 3, d: 4}, b:2}"}
                </span>
              </p>
            </div>
          </div>
          <br />
          <div>
            <h2>Deep Copy</h2>
            <p className="paragraph">
              Al hacer un deep copy, si las propiedades referencian objetos, no
              se copian las referencias, en vez de esto, se crean objetos
              totalmente nuevos. Asi, al modificar los objetos refernciados por
              las propiedades del objeto de origen, no se modifican los objetos
              referenciados por las propiedades del objeto destino, o viceversa.
            </p>
            <div className="code">
              <p>{"const object1 = {a: {c: 3, d: 4}, b: 2};"}</p>
              <p style={{ color: "red" }}>
                {"const object2 = JSON.parse(JSON.stringify(object1));"}
              </p>
              <p style={{ color: "green" }}>object1.a.c = 5;</p>
              <p>
                console.log(object2);{" "}
                <span style={{ color: "blue" }}>
                  {"//  {a: {c: 3, d: 4}, b:2}"}
                </span>
              </p>
            </div>
            <p className="paragraph">
              Otra forma de hacer deep copy en javascript es utilizando el
              metodo{" "}
              <a href="https://developer.mozilla.org/en-US/docs/Web/API/structuredClone">
                structuredClone()
              </a>
              .
            </p>
          </div>
        </div>
      </main>
      <style jsx>
        {`
          main {
            max-width: 800px;
            padding: 2rem;
            display: flex;
            flex-direction: column;
            align-items: center;
          }
          .paragraph {
            text-align: justify;
            text-indent: 1rem;
          }
          .code {
            color: grey;
          }
        `}
      </style>
    </>
  );
}
