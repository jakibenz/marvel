import React from 'react';

const TeamCard = ({ teamDetails, onDelete }) => {

    const { name, thumbnail } = teamDetails
    const image = `${thumbnail.path}/standard_amazing.${thumbnail.extension}`

    return (
        <main className="mw6 center">
            <article className="dt w-100 bb b--black-05 pb2 mt2" href="#0">
                <div className="dtc w1 w3-ns v-mid">
                    <img src={image} alt="imageteam" className="ba b--black-10 db br2 w2 w3-ns h2 h3-ns" />
                </div>
                <div className="tl dtc v-mid pl3">
                    <h1 className="f6 f5-ns fw6 lh-title black mv0">{name} </h1>
                    <h2 className="f6 fw4 mt0 mb0 black-60">#{teamDetails.id}</h2>
                </div>
                <div className="dtc v-mid">
                    <div className="w-100 tr">
                        <button
                            className="f6 button-reset bg-white ba b--black-10 dim pointer pv1 black-60"
                            onClick={() => onDelete(teamDetails.id)}
                            type="submit">
                            Remove
                        </button>
                    </div>
                </div>
            </article>
        </main>
    )
}

export default TeamCard