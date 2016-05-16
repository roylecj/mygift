if (Ideas.find().count() === 0) {

  kylieUser = Accounts.createUser({
    username: "kyliea",
    password: "password",
    email: "k_arantz@yahoo.com",
    profile: {
      name: "Kylie Arantz",
      age: "42" }
  });

  chrisUser = Accounts.createUser({
    username: "croyle",
    password: "password",
    email: "roylecj@gmail.com",
    profile: {
      name: "Chris Royle",
      age: "44" }
  });
  Ideas.insert({
    userId: chrisUser,
    forMeFlag: false,
    giftFor: "Naomi",
    giftText: "Spa treatment",
    createdAt: new Date(),
    modifiedAt: new Date(),
    activeFlag: true
  });

  Ideas.insert({
    userId: chrisUser,
    forMeFlag: true,
    giftText: "XBOX Game",
    createdAt: new Date(),
    modifiedAt: new Date(),
    activeFlag: true
  });

  Ideas.insert({
    userId: chrisUser,
    forMeFlag: false,
    giftForUser: kylieUser,
    giftText: "Flowers",
    createdAt: new Date(),
    modifiedAt: new Date(),
    activeFlag: true
  })
}
