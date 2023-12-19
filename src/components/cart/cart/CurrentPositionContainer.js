export default function CurrentPositionContainer({currentPosition}) {
    return <div className="section__content">
        <div className="container">
            <div className="breadcrumb">
                <div className="breadcrumb__wrap">
                    <ul className="breadcrumb__list">
                        <li className="has-separator">

                            <a href={currentPosition[0].url}>{currentPosition[0].position}</a>
                        </li>
                        <li className="is-marked">
                            <a href={currentPosition[1].url}>{currentPosition[1].position}</a>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    </div>
};