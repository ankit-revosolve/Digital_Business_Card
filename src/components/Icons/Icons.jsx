import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faEnvelope } from '@fortawesome/free-solid-svg-icons'
import {
  faLinkedin,
  faSquareTwitter,
  faSquareFacebook,
  faSquareInstagram,
  faSquareGithub,
} from "@fortawesome/free-brands-svg-icons";


function EmailIcon() {
  return (
    <FontAwesomeIcon icon={faEnvelope} />
  )
}

function LinkedinIcon(){
    return(
        <FontAwesomeIcon icon={faLinkedin} />
    )
}

function TwitterIcon(){
    return(
        <FontAwesomeIcon icon={faSquareTwitter} />
    )
}

function FacebookIcon(){
    return(
        <FontAwesomeIcon icon={faSquareFacebook} />
    )
}

function InstagramIcon(){
    return(
        <FontAwesomeIcon icon={faSquareInstagram} />
    )
}

function GitHubIcon(){
    return(
        <FontAwesomeIcon icon={faSquareGithub} />
    )
}

export  {EmailIcon,LinkedinIcon,TwitterIcon,FacebookIcon,InstagramIcon, GitHubIcon}