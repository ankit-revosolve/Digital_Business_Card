import { EmailIcon, LinkedinIcon, TwitterIcon, FacebookIcon, InstagramIcon, GitHubIcon } from "../Icons/Icons"
import ProfileImg from "../../assets/profile_img.jpeg"
import "./BusinessCard.css"

function BusinessCard() {
    return (
        <article className="card__container">
            <img className="user__image" src={ProfileImg} alt="profile" />
            <section className="user__info">
                <section className="user">
                    <h1 className="user__name">Ankit Bhanushali</h1>
                    <p className="user__role">Frontend Developer</p>
                    <a href="#" className="user__profile__link">ankit's website</a>
                </section>
                <section className="socials__cta">
                    <span className="social__links">
                        <a href="#" className="link email"><EmailIcon /> Email</a>
                    </span>
                    <span className="social__links">
                        <a href="#" className="link linkedin"><LinkedinIcon /> Linkedin</a>
                    </span>
                </section>
                <section className="user__about__interests">
                    <div className="user__about">
                        <h2 className="about">About</h2>
                        <p className="about__description">
                            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Sint numquam voluptas reprehenderit laudantium voluptatibus enim minus soluta autem earum facere hic officiis excepturi veniam fugiat modi nisi, expedita rerum unde.
                        </p>
                    </div>
                    <div className="user__interest">
                        <h2 className="interest">Interests</h2>
                        <p className="interest__description">
                            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Sint numquam voluptas reprehenderit laudantium voluptatibus enim minus soluta autem earum facere hic officiis excepturi veniam fugiat modi nisi, expedita rerum unde.
                        </p>
                    </div>
                </section>
            </section>
            <section className="socials">
                <a href="#" className="social__icons"><TwitterIcon /></a>
                <a href="#" className="social__icons"><FacebookIcon /></a>
                <a href="#" className="social__icons"><InstagramIcon /></a>
                <a href="#" className="social__icons"><LinkedinIcon /></a>
                <a href="#" className="social__icons"><GitHubIcon /></a>
            </section>
        </article>
    )
}

export default BusinessCard