import "../index.css";

export default function Modal(props: ModalProps) {
  const { children, showBackButton } = props;

  return (
    <div className="modal">
      <div className="modal__container">
        <div className="modal__featured">
          {
            showBackButton ?
              <button
                type="button"
                className="button--transparent button--close"
              >
                <svg className="nc-icon glyph" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" x="0px" y="0px" width="32px" height="32px" viewBox="0 0 32 32">
                  <g>
                    <path fill="#ffffff" d="M1.293,15.293L11,5.586L12.414,7l-8,8H31v2H4.414l8,8L11,26.414l-9.707-9.707 C0.902,16.316,0.902,15.684,1.293,15.293z"></path>
                  </g>
                </svg>
              </button> : <></>
          }
          <img
            className="modal__product"
            src="https://source.unsplash.com/random/270x588"
            alt="decorative"
          />
        </div>
        <div className="modal__content">
          {children}
        </div>
      </div>
    </div >
  )
}

interface ModalProps {
  children?: JSX.Element;
  showBackButton: Boolean;
}
