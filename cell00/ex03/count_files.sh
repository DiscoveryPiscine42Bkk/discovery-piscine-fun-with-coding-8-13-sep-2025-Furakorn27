#!/bin/bash

# นับไฟล์ปกติ
file_count=$(find . -maxdepth 1 -type f | wc -l)

# นับไดเรกทอรี
dir_count=$(find . -maxdepth 1 -type d | wc -l)

# รวมทั้งหมด (ไฟล์ + โฟลเดอร์)
total=$((file_count + dir_count))

# แสดงผล
echo $total