const Stat = () => {
  return (
    <section className="storage-stat" aria-label="Storage Usage Statistics">
      <h1 className="storage-stat__summary">
        You’ve used <b>815</b> GB of your storage
      </h1>
      <div
        className="storage-stat__progress-wrapper"
        role="progressbar"
        aria-valuenow={815}
        aria-valuemin={0}
        aria-valuemax={1000}
        aria-valuetext="815 GB of 1000 GB storage used"
      >
        <div className="storage-stat__bar">
          <div className="storage-stat__fill">
            <span className="storage-stat__handle" aria-hidden="true"></span>
          </div>
        </div>
        <div className="storage-stat__labels" aria-hidden="true">
          <span>0 GB</span>
          <span>1000 GB</span>
        </div>
      </div>

      <div className="storage-stat__badge">
        <span className="storage-stat__badge-value">185</span>
        <span className="storage-stat__badge-unit">GB LEFT</span>
      </div>
    </section>
  );
}

export default Stat