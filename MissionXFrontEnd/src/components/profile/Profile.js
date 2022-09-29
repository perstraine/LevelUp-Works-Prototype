import styles from '../styles/profile/Profile.module.css'
import dateFormat from '../shared/DateFormat'

const {title,lbl,data,profile_form } = styles;

/* Created as a form default readonly - Will change to edit onClick */

export default function Profile({ profile }) {

    const dob = dateFormat(profile.date_of_birth);
    return (
            <form className={profile_form}>
            <h className={title}>{profile.name}
                </h>
                <label className={lbl}>School
                <input className={data}
                    disabled="true"
                    type="text"
                    name="school"
                    value={profile.school} />
                    </label>
                <label className={lbl}>Teacher
                <input className={data}
                    disabled="true" type="text"
                    name="teacher"
                    value={profile.teacher_name} />
                    </label>
                <label className={lbl}>Course
                <input className={data}
                    disabled="true"
                    type="text"
                    name="course"
                    value={profile.course} />
                    </label>
                <label className={lbl} >Date of Birth
                <input className={data}
                    disabled="true"
                    type="text"
                    name="dob"
                    value={dob} />
                    </label>
                <label className={lbl}>Contact No
                <input className={data}
                    disabled="true"
                    type="text"
                    name="contact_number"
                    value={profile.contact_number} />
                    </label>
                <label className={lbl}>Email Address
                <input className={data}
                    disabled="true"
                    type="text"
                    name="email"
                    value={profile.email} />
                    </label>
            </form>
    )
}