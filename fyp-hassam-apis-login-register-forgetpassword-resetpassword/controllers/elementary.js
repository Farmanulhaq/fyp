export const elementaryRoute = (req, res, next) => {
    res.status(200).json({
        success: true,
        data: "You got access of this route!"
    });
}
