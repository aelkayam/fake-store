import "./Loading.css";

function Loading(props) {
  if (props.showLoading === false) {
    return (
      <main className="spinner-examples">
        <div className="example">
          <span className="smooth spinner" />
        </div>
      </main>
    );
  }
}
export default Loading;
