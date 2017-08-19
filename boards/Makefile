

all: generate_boards.cpp
	g++ -Wall -Werror generate_boards.cpp -o sudoku_generation


clean:
	rm sudoku_generation
	rm all_easy.txt
	rm all_medium.txt
	rm all_hard.txt
	rm -rvf easy/start/*
	rm -rvf easy/correct/*
	rm -rvf medium/start/*
	rm -rvf medium/correct/*
	rm -rvf hard/start/*
	rm -rvf hard/correct/*
