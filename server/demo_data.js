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
    giftPrice: 60,
    createdAt: new Date(),
    modifiedAt: new Date(),
    activeFlag: true
  });

  Ideas.insert({
    userId: chrisUser,
    forMeFlag: true,
    giftText: "XBOX Game",
    giftPriceMin: 60,
    giftPriceMax: 100,
    createdAt: new Date(),
    modifiedAt: new Date(),
    activeFlag: true
  });

  Ideas.insert({
    userId: chrisUser,
    forMeFlag: false,
    giftForUser: kylieUser,
    giftText: "Flowers",
    giftPriceMin: 30,
    giftPriceMax: 120,
    createdAt: new Date(),
    modifiedAt: new Date(),
    activeFlag: true
  });

  MessageItems.insert({
    userId: chrisUser,
    messageFromUser: kylieUser,
    messageText: "Do you think we should get Naomi a beauty treatment?",
    createdAt: new Date(),
    modifiedAt: new Date(),
    createdBy: chrisUser,
    modifiedBy: chrisUser,
    activeFlag: true
  })
}
