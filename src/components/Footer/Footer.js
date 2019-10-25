import React from 'react';
import './Footer.css';

function Footer() {
    return(
        <footer>
            <div className='container'>
                <div className='row'>
                    <div className='col-12'>
                        <ul>
                            <li>
                                <a href="https://www.transilien.com/fr/page-de-liste-editoriale/nos-engagements">Nos engagements</a>
                            </li>
                            <li className='separator'>|</li>
                            <li>
                                <a href="https://www.transilien.com/fr/page-editoriale/devenez-partenaire-de-transiliencom">Partenariats</a>
                            </li>
                            <li className='separator'>|</li>
                            <li>
                                <a href="https://www.transilien.com/fr/page-editoriale/recrutement">Recrutement</a>
                            </li>
                            <li className='separator'>|</li>
                            <li>
                                <a href="https://www.transilien.com/fr/presse-annee/communiques-et-dossiers-de-presse-2019">Presse</a>
                            </li>
                            <li className='separator'>|</li>
                            <li>
                                <a href="https://www.transilien.com/fr/page-editoriale/faq">FAQ</a>
                            </li>
                            <li className='separator'>|</li>
                            <li>
                                <a href="https://www.transilien.com/fr/nous-contacter">Contact</a>
                            </li>
                            <li className='separator'>|</li>
                            <li>
                                <a href="http://96minutes.transilien.com/">96 Minutes</a>
                            </li>
                        </ul>
                        <ul>
                            <li>
                                <a href="https://www.transilien.com/fr/page-editoriale/mentions-legales-credits-cil#conditions-generales-dutilisat-0-1709">Données personnelles</a>
                            </li>
                            <li className='separator'>|</li>
                            <li>
                                <a href="https://www.transilien.com/fr/page-editoriale/mentions-legales-credits-cil">Mentions légales</a>
                            </li>
                            <li className='separator'>|</li>
                            <li>
                                <a href="https://www.transilien.com/fr/page-editoriale/entreprises-collectivites-et-partenaires">Solutions d'entreprises</a>
                            </li>
                            <li className='separator'>|</li>
                            <li>
                                <a href="https://data.sncf.com/explore/?sort=modified">Open Data</a>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </footer>
    )
}

export default Footer;