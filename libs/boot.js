module.exports = app => {
    app.db.sequelize.sync().done(() => {
        app.listen(app.get("port"), () => {
            console.log(`Onlinetest API - Port ${app.get("port")}`);
        });
    });
};
