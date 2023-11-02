-- DATETIME에서 DATE로 형변환
SELECT ANIMAL_ID, NAME, date_format(DATETIME, '%Y-%m-%d')
FROM ANIMAL_INS

-- 가격이 제일 비싼 식품의 정보 출력하기
SELECT *
FROM FOOD_PRODUCT
WHERE PRICE = (SELECT MAX(PRICE) FROM FOOD_PRODUCT)
