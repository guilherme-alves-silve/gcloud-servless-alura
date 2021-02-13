const activitiesType = ['create-answers', 'respond-answers']

module.exports = function validateActivity(activity) {
    
    const errors = []

    if (activity.hasOwnProperty("created_at") === false) {
        errors.push({ "msg": "The attribute created_at is mandatory!" })
    }

    if (activity.hasOwnProperty("activity_type") === false) {
        errors.push({ "msg": "The activity_type created_at is mandatory!" })
    } else if (activitiesType.indexOf(activity.activity_type) === -1) {
        errors.push({ "msg": "The attribute activity_type value must be 'create-answers' or 'respond-answers'!"})
    }

    if (activity.hasOwnProperty("course_name") === false) {
        errors.push({ "msg": "The attribute course_name is mandatory!" })
    }

    if (activity.hasOwnProperty("class_name") === false) {
        errors.push({ "msg": "The attribute class_name is mandatory!" })
    }

    if (activity.hasOwnProperty("text") === false) {
        errors.push({ "msg": "The attribute text is mandatory!" })
    } else if (activity.text.length > 255) {
        errors.push({ "msg": "The attribute text must be less than or equal to 255!" })
    }

    return errors
}
