const skipAmount = (page - 1) * pageSize;
    .skip(skipAmount)
      .limit(pageSize);
 const totalusers = await User.countDocuments(query);

    const isNext = totalusers > skipAmount + users.length;