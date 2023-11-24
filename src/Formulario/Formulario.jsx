export function Formulario() {
  return (
    <div className="form-container">
      <form>
        <div className="row">
          <div className="col-12 col-md-6">
            <div className="mb-3">
              <label className="form-label">
                Nombre
              </label>
              <input type="text" className="form-control" />
            </div>
          </div>
          <div className="col-12 col-md-6">
            <div className="mb-3">
              <label className="form-label">
                Apellido
              </label>
              <input type="text" className="form-control" />
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-12 col-md-6">
            <div className="mb-3">
              <label className="form-label">
                Fecha de entrada
              </label>
              <input type="date" className="form-control" />
            </div>
          </div>
          <div className="col-12 col-md-6">
            <div className="mb-3">
              <label className="form-label">
                Fecha de salida
              </label>
              <input type="date" className="form-control" />
            </div>
          </div>
        </div>
        <button type="submit" className="btn-success">Enviar</button>
      </form>
    </div>
  );
}
