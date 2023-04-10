# Backend Functions

## User

1. signUp(username, email, password)
Input: username (string), email (string), password (string)
Output: isCreated 

2. login(email, password)
Input: email (string), password (string)
Output: isLogin

3. reset(username, oldPassword, newPassword)
Input: username (string), oldPassword (string), newPassword (string)
Output: isReset

4. retrieveUser(username)
Input: username (string)

5. deleteUser(username)
Input: username (string)
Output: isDeleted

## Blog
1. addBlog(title, content, creatorId)
Input: title (string), content (string), creatorId (string)
Output: isAdded

2. getBlogByUser(creatorId)
Input: creatorId (string)
Output: [{title, content, creatorId, createdAt}]

3. deleteBlog(blogId)
Input: blogId (string)
Output: isDeleted

4. likeBlog(blogId)
Input: blogId (string)
Output: isLiked